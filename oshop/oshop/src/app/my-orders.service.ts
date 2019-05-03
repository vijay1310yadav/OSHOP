import { OrderService } from './order.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MyOrdersService {

  order$;
  orderRes;
  constructor(private db: AngularFireDatabase, private orderService: OrderService) {

    this.order$ = (this.orderService.getOrders());
  }
}
