import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  
  public displayName : boolean = true;
  public color : string = "blue";
  public colors  = ["red","blue","green","yellow"]



  constructor() { }

  ngOnInit(): void {
  }

}
