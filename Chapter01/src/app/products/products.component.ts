import { Component, OnInit } from '@angular/core';
import {ProductService, Product} from '../product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers :[ProductService]
})
export class ProductsComponent implements OnInit {



  products : Array<Product>;

  constructor(productService: ProductService){
    this.products = productService.getProducts();

}

  ngOnInit() {
  }

}
