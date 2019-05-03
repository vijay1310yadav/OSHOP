import { ProductService } from './../../product.service';
import { DataTableModule, DataTableResource } from 'angular5-data-table';
import { Product } from 'shared/models/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {


  // filteredProducts: Product[];
  products: Product[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;

  items: Product[] = [];
  itemCount: number;



  constructor(private procuctService: ProductService) {

    // this.subscription = this.procuctService.getAll()
    //   .snapshotChanges().subscribe(products => {
    //     this.filteredProducts = this.products = products;});



    this.subscription = this.procuctService.getAll()
      .subscribe(products => {

        this.products = products;
        this.initializingTable(products);
      });
  }

  private initializingTable(products: Product[]) {

    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);

    this.tableResource.count()
      .then(count => this.itemCount = count);
  }


  reloadItems(params) {

    if (!this.tableResource) return;

    this.tableResource.query(params)
      .then(items => this.items = items);

  }

  filter(query: string) {
    let filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
    console.log(query, filteredProducts);

    this.initializingTable(filteredProducts);
  }

  // filter(query: string) {
  //   this.filteredProducts = (query) ?
  //     this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
  //     this.products;
  //   console.log(this.products);
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit() {
  }

}
