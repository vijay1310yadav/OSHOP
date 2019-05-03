import { Observable } from 'rxjs';
import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from 'shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'shared/models/Shopping-cart';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  filteredProducts: Product[] = [];
  products: Product[] = [];
  cart: any;
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }

  private populateProducts() {
    this.productService
      .getAll()
      .switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      }).subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
      });
  }

  private applyFilter() {
    this.filteredProducts = (this.category) ?
      this.products.filter(p => p.category === this.category) :
      this.products;
  }
}

