import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessageListComponent } from './message-list/message-list.component';
import { Routes } from '@angular/router';

 
const routes: Routes = [
  {
    path:'',
    component:MessageListComponent
  }
];



@NgModule({
  declarations: [MessageListComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
