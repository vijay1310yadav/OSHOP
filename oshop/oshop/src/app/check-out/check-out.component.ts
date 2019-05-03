import { Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/Shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cart$: Observable<ShoppingCart>;

  constructor(
    private shoppingCartService: ShoppingCartService) { }


  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }

}
