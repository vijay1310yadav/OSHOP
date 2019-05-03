import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'shared/models/order';
import { MyOrdersService } from '../my-orders.service';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  order$;


  constructor(
    private authService: AuthService,
    private orderService: OrderService) {

    // authService.user$.subscribe(x => {
    //   this.order$ = (this.orderService.getOrdersByUser(x.uid)).valueChanges();
    //   console.log(this.order$);
    //   return this.order$;
    // });


    // this.order$ = (this.orderService.getOrdersByUser(this.userId)).valueChanges();

    this.order$ = authService.user$.switchMap(u => (this.orderService.getOrdersByUser(u.uid)));
    // console.log(this.order$);

    // this.order$ = this.orderService.getOrders().valueChanges();
  }

  // this.order$ = (this.db.object('/orders/').valueChanges());
  // let x = this.order$.subscribe((x: Order) => this.order$);
  // this.myOrderService.getOrdersId();
  // console.log(this.order$, x);



  ngOnInit() {
  }

}
