import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() data;    

  constructor() { }

  ngOnInit() {
  }

}
