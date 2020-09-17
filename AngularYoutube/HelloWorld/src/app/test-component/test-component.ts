import { Component, OnInit } from '@angular/core';


//   templateUrl:"./test-component.html",
@Component({
  selector: 'test',

  template:`<h4>Welcome {{name}}</h4> 

  <div>
       <input id="{{myId}}" type="text" value="Tene">
       </div>

       <br/>
      <div>
      <input [id]="myId02" bind-disabled="isDisabled" type="text" value="Tene">
      </div>

      <h4>Styles binding </h4>
      <h4 class="text-success">Codevolution</h4>
      <h4 [class]="successClass">Codevolution successClass</h4>
      <h4 class="text-special" [class]="successClass">Codevolution text special</h4>
      <h4 [class.text-danger]="hasError">Codevolution - text danger</h4>
      
      <h4 [ngClass]="messageClasses">Message</h4>
      
      

      <h1>Style binding</h1>
      <h4 [style.color]="'orange'">Style Binding</h4> 
      <h4 [style.color]="hasError ? 'red' : 'green'">Style Binding 2</h4>            
      <h4 [style.color]="highlightColor">Style Binding 3</h4>       
      <h4 [ngStyle]="titleStyles">Style Binding 4</h4>


      
      <h1>Button Click Event</h1>
      <button (click)="onClick($event)">Greet</button>
      <button (click)="greeting = 'Welcome Vishwas'">Greet Vishwas</button> 
      <h2>{{greeting}}</h2>


      <button (click)="onToggleImage($event)" class="btn btn-success">Toggle Image</button>
      <div>
        <img [src]="urlImage" />
      </div>

      <br>
      <div>
       <img  src="{{urlImage}}" />
      </div>


  <div>
   <div>
    <h1>Button Click Event</h1>
  </div>

  <div>
  <input #myInput type="text">
  </div>
  <div>
   <button (click)="logMessage(myInput.value)">Log</button>
  </div>
  <div>
  <br />
  <h2>Two ways binding</h2>
  <input type="text" [(ngModel)]="name">  
   </div>
  {{name}}
  </div>


       `,
  styleUrls: ['./test-component.scss']
})

export class TestComponent implements OnInit {

  public greeting = "";
 
  public toggleImage: boolean = false;

 public urlImage = "https://www.w3schools.com/html/pic_mountain.jpg";

  public hasError = false;

  public isDisabled : boolean = false;
  public  myId  = "TestId";
  public  myId02  = "TestId";
  public  name  = "Vincent De Paul Tene";
  public siteUrl : string = window.location.href;

  public highlightColor = "orange";

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public successClass = "text-success";
  public isSpecial = true;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }


  constructor() { }

  ngOnInit(): void {
  }

  
  onClick(event){
    console.log(event)
    this.greeting = event.type + " " + event.offsetX;
  }
  

  onToggleImage(event){
   this.toggleDisplayImage(event);
  }
  

  logMessage(value){
    this.toggleDisplayImage(value);
  }
   
   toggleDisplayImage(value){
    this.toggleImage =  this.toggleImage != true;
    console.log(value);
    if(this.toggleImage){
      this.urlImage = "https://www.w3schools.com/html/pic_mountain.jpg";
    }
    else{
      this.urlImage = "https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47bbcn57z2s5voxpq36i61hapgvzl07eqmuih4f072&rid=giphy.gif";
    }
   }

}
