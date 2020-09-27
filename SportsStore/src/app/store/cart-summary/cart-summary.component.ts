import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/model/cart';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

 
 
      constructor(public cart: CartService) { }
 

  ngOnInit(): void {
  }

}
