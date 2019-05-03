
import { MyOrdersService } from './my-orders.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AuthGaurd } from './auth-gaurd.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular5-data-table';

import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { AdminAuthGaurd } from './admin-auth-gaurd.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrderService } from './order.service';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule.forRoot(),
    // AppRoutingModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    CustomFormsModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ProductsComponent //using productsComponent instead of HomeComponent here to show products at home route...
      },
      {
        path: 'myorders',
        component: MyOrdersComponent
      },
      {
        path: 'check-out',
        component: CheckOutComponent, canActivate: [AuthGaurd]
      },
      {
        path: 'order-success/:id',
        component: OrderSuccessComponent, canActivate: [AuthGaurd]
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGaurd, AdminAuthGaurd]
      },

      {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGaurd, AdminAuthGaurd]
      },
      {
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGaurd, AdminAuthGaurd]
      },
      {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGaurd, AdminAuthGaurd]
      },
      {
        path: 'order-details/:id',
        component: OrderDetailsComponent,
        canActivate: [AuthGaurd]
      },
    ])
  ],
  providers:
    [
      AuthService,
      AuthGaurd,
      AdminAuthGaurd,
      UserService,
      CategoryService,
      ProductService,
      ShoppingCartService,
      OrderService,
      MyOrdersService
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
