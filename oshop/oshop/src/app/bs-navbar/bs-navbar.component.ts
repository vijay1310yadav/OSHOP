import { ShoppingCartService } from './../shopping-cart.service';
import { AppUser } from 'shared/models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/Shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  constructor(private auth: AuthService, private cartService: ShoppingCartService) {
  }

  logout() {
    this.auth.logout();
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = (await this.cartService.getCart());

    // this.cart$.snapshotChanges()
  }
}