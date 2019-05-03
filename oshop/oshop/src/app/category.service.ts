import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  // getCategories() {
  //   return this.db.list('/categories');
  // }
  public getAll() {
    return this.db
      .list('/categories', ref => ref.orderByChild('name'))
      .snapshotChanges();
  }
}
