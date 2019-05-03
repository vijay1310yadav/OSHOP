import { ProductService } from '../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators/take';
// import 'rxjs/add/operators/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {


  categories$;
  product = {};
  id;
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {

    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).pipe(take(1))
        .subscribe(p => { return this.product = p });
      // console.log(this.id); //Also change item.key --> item.id in admin.product.component.html
    }

  }




  save(product) {
    if (this.id) this.productService.update(this.id, product);
    else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);

    // console.log(product);
  }


  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);

  }

}
