import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderSheetComponent } from './order-sheet/order-sheet.component';
import { DebugPanelComponent } from './debug-panel/debug-panel.component';
import {ReactiveFormsModule } from '@angular/forms'
 
 

@NgModule({
  declarations: [
    AppComponent,
    OrderSheetComponent,
    DebugPanelComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
