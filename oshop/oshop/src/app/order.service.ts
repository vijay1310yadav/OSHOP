import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Order } from 'shared/models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  items;
  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order) {
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() {
    let result = (this.db.list('/orders/'));
    return result;
  }

  // getOrdersByUser(userId: string) {
  //   let result = this.db.list('/orders', ref => {
  //     result = (ref.equalTo(userId).orderByChild('userId'));
  //     return result;
  //   });
  //   return result;
  // }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders', fRef =>
      fRef.equalTo(userId).orderByChild('userId')).valueChanges();
  }




  // get totalBill() {
  //   let order$ = this.getOrders().valueChanges();
  //   order$.subscribe((items: any) => this.items = items);
  //   let sum = 0;
  //   for (let item in this.items) {
  //     console.log(this.items[item].product.totalPrice);
  //     sum += this.items[item].product.totalPrice;
  //     console.log(sum);
  //   }
  //   return sum;
  // }



}
