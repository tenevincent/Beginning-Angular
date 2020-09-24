import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  @Input("inputParameter") public Name: string;

  @Output() public childEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  public date = new Date();


  fireEvent(){

    var currentDate = "Current date is " + this.date.toLocaleTimeString();
    this.childEvent.emit(currentDate);
  }

}
