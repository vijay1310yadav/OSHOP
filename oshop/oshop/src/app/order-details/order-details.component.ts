import { Component } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  order$;
  totalBill: number;
  constructor(private orderService: OrderService) {

    this.order$ = (this.orderService.getOrders()).valueChanges();



  }
}
