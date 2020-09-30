import { ApplicationRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductRepository } from '../../model/product-repository';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  model: ProductRepository = new ProductRepository();


  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }

  ngOnInit(): void {
  }

  getClasses(): string {
    return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
  }

  getClasse(key: number): string {
    let product = this.model.getProduct(key);
    return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
  }

  getClassMap(key: number): Object {
    let product = this.model.getProduct(key);
    return {
      "text-center bg-danger": product.name == "Kayak",
      "bg-info": product.price < 50
    };
  }

  getStyles(key: number) {
    let product = this.model.getProduct(key);
    return {
      fontSize: "30px",
      "margin.px": 100,
      color: product.price > 50 ? "red" : "green"
    };
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }
  getClassesByPosition(position: number): string {
    let product = this.getProductByPosition(position);
    return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
    }
    getProducts(): Product[] {
    return this.model.getProducts();
    }
    getProductCount(): number {
    return this.getProducts().length;
    }
    targetName: string = "Kayak";

  fontSizeWithUnits: string = "30px";
  fontSizeWithoutUnits: string = "30";

}
