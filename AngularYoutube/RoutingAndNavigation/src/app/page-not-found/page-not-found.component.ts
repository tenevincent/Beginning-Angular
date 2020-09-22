import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p class="text-danger">
     The requested url can not be found!
    </p>
  `,
  styles: [".text-danger{color: red}"
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
