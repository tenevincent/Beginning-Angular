import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { FormsModule }   from '@angular/forms';

import { Product } from "../../model/product";
import { ProductRepository } from "../../model/product-repository";



@Component({
  selector: 'app-product-editor',
  template: `
  <div class="bg-primary p-2 text-white" [class.bg-warning]="editing"
  [class.text-dark]="editing">
  <h5>{{editing ? "Edit" : "Create"}} Product</h5>
  </div>
  <form novalidate #form="ngForm" (ngSubmit)="save(form)">
  <div class="form-group">
  <label>Name</label>
  <input class="form-control" name="name" [(ngModel)]="product.name" />
  </div>
  <div class="form-group">
  <label>Category</label>
  <input class="form-control" name="category" [(ngModel)]="product.category" />
  </div>
  <div class="form-group">
  <label>Description</label>
  <textarea class="form-control" name="description"
  [(ngModel)]="product.description">
  </textarea>
  </div>
  <div class="form-group">
  <label>Price</label>
  <input class="form-control" name="price" [(ngModel)]="product.price" />
  </div>
  <button type="submit" class="btn btn-primary m-1" [class.btn-warning]="editing">
  {{editing ? "Save" : "Create"}}
  </button>
  <button type="reset" class="btn btn-secondary" routerLink="/admin/main/products">
  Cancel
  </button>
  </form>
  `,
  styles: [
  ]
})
export class ProductEditorComponent implements OnInit {

  editing: boolean = false;
  product: Product = new Product();
  constructor(private repository: ProductRepository, private router: Router, activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      Object.assign(this.product,  repository.getProduct(activeRoute.snapshot.params["id"]));
    }
  }


  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }

  ngOnInit(): void {
  }

}
