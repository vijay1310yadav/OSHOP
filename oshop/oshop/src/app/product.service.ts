import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'shared/models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  // getAll() {
  //   return this.db.list('/products'); 
  // }

  getAll(): Observable<Product[]> {
    return this.db.list<Product>('/products')
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => {
            const data = c.payload.val() as Product;
            const id = c.payload.key;
            // console.log("This is the ID: " + id, "This is the Data: \n", data);  //Use this to see if we're getting the id and data in right(required) form...
            return { id, ...data };
          })
        )
      );
  }


  get(productId) {
    return this.db.object('/products/' + productId).valueChanges();
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    return this.db.object('products/' + productId).remove();
  }

}


