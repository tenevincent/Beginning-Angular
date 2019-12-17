import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products;

  constructor(productService: ProductService){
      this.products = productService.getProducts();
  }
 

  ngOnInit() {
  }

}
