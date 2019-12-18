import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Form } from '@angular/forms';
 

@Component({
  selector: 'order-sheet',
  templateUrl: './order-sheet.component.html',
  styleUrls: ['./order-sheet.component.scss']
})

export class OrderSheetComponent {
  orderSheetForm: FormGroup;
  weirdRequestsControls: FormArray;
  formActive = true;
  
  constructor(private _formBuilder: FormBuilder) {
    this._buildForm();
  }
  
  private _buildForm() {
    this.orderSheetForm = this._formBuilder.group({
      customerName: this._formBuilder.control(null),
      sizes: this._formBuilder.group({
        sizeSmall: this._formBuilder.control(new Radio(false, 'small')),
        sizeLarge: this._formBuilder.control(new RadioButtonState(false, 'large'))
      }),
      specialtySandwich: this._formBuilder.control(null),
      breads: this._formBuilder.group({
        breadWheatRoll: this._formBuilder.control(new RadioButtonState(false, 'wheat roll')),
        breadWhiteRoll: this._formBuilder.control(new RadioButtonState(false, 'white roll')),
        breadSourdoughRoll: this._formBuilder.control(new RadioButtonState(false, 'sourdough roll'))
      }),
      meats: this._formBuilder.group({
        meatHam: this._formBuilder.control(null),
        meatTurkey: this._formBuilder.control(null),
        meatRoastBeef: this._formBuilder.control(null)
      }),
      cheeses: this._formBuilder.group({
        cheeseProvolone: this._formBuilder.control(null),
        cheeseCheddar: this._formBuilder.control(null),
        cheeseSwiss: this._formBuilder.control(null)
      }),
      veggiesAndSuch: this._formBuilder.group({
        veggieLettuce: this._formBuilder.control(null),
        veggieTomato: this._formBuilder.control(null),
        veggieMustard: this._formBuilder.control(null)
      }),
      weirdRequests: this._formBuilder.array([
        this._formBuilder.control(null)
      ]),
      otherNotes: this._formBuilder.control(null)
    });
    
    this.weirdRequestsControls = this.orderSheetForm.find('weirdRequests') as ControlArray;
  }
  
  onAddWeirdRequest() {
    this.weirdRequestsControls.push(this._formBuilder.control(null));
  }
  
  onRemoveWeirdRequest(index) {
    this.weirdRequestsControls.removeAt(index);
  }
  
  onClearForm() {
    this._buildForm();
    this.formActive = false;
    setTimeout(() => {
      this.formActive = true;
    }, 0);
  }
}

