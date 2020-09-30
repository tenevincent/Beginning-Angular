import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Product } from "../../model/product";
import { ProductRepository } from "../../model/product-repository";



@Component({
  selector: 'product-table',
  template: `
  <table class="table table-sm table-striped">
  <thead>
      <tr>
          <th>ID</th><th>Name</th><th>Category</th><th>Price</th>
          <th></th>
      </tr>
  </thead>
  <tbody>
      <tr *ngFor="let p of getProducts()">
          <td>{{p.id}}</td>
          <td>{{p.name}}</td>
          <td>{{p.category}}</td>
          <td>{{p.price | currency:"USD":"symbol":"2.2-2"}}</td>
          <td>
              <button class="btn btn-sm btn-warning m-1"
                      [routerLink]="['/admin/main/products/edit', p.id]">
                  Edit
              </button>
              <button class="btn btn-sm btn-danger" (click)="deleteProduct(p.id)">
                  Delete
              </button>
          </td>
      </tr>
  </tbody>
</table>
<button class="btn btn-primary" routerLink="/admin/main/products/create">
  Create New Product
</button>
  `,
  styles: [
  ]
})
export class ProductTableComponent   {

  constructor(private repository: ProductRepository) { }
  
  getProducts(): Product[] {
  return this.repository.getProducts();
  }

  deleteProduct(id: number) {
  this.repository.deleteProduct(id);
  }


  ngOnInit(): void {
  }

}