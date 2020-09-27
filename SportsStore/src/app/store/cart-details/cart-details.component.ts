import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/model/cart';

@Component({
  selector: 'cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  constructor(public cart: CartService) { }


  ngOnInit(): void {
  }

}
