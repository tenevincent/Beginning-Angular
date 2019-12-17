import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent implements OnInit {

  title : string;
  imageUrl : string;
  isActive: boolean = false;
  constructor() {
    this.imageUrl = "https://w3schools.com/html/pic_mountain.jpg";

   }

  ngOnInit() {
  }

  onClick($event: any) : void{
    console.log("clicked", $event);

    this.isActive = this.isActive!= true;

  }

}
