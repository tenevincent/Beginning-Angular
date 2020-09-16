import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'test',
  templateUrl:"./test-component.html",
  styleUrls: ['./test-component.scss']
})

export class TestComponent implements OnInit {

  public  name  = "Vincent De Paul Tene";
  public siteUrl : string = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

}
