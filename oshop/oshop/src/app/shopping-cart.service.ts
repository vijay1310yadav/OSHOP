import { Product } from 'shared/models/product';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { take } from 'rxjs/operators/take';
import { ShoppingCart } from 'shared/models/Shopping-cart';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }


  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).snapshotChanges().pipe(
      map((x: any) => {
        const items = x.payload.val().items;
        return new ShoppingCart(items);
      })
    )
  }

  async addToCart(product: Product) {
    this.updateItem(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItem(product, -1);
  }

  async clearCart() {
    let cartId = await this.getOrCreateCartId()
    this.db.object('shopping-carts/' + cartId + "/items").remove();
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }



  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;

  }

  private async updateItem(product: Product, change: number) {
    const cartId = await this.getOrCreateCartId();
    const item = this.getItem(cartId, product.id);
    item.snapshotChanges().pipe(take(1)).subscribe((i: any) => {
      if (i.payload.val()) {
        let quantity = (i.payload.val().quantity || 0) + change;
        if (quantity === 0) item.remove();
        else
          item.update({
            title: product.title,
            imageUrl: product.imageUrl,
            price: product.price,
            quantity: quantity
          });
      }
      else {
        item.update({
          title: product.title,
          imageUrl: product.imageUrl,
          price: product.price,
          quantity: (i.quantity || 0) + change
        });
      }
    });
  }
}
