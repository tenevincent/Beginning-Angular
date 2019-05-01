import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeetListComponent } from './employeet-list/employeet-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'/departments',pathMatch:'full'},
  {path:'departments', component: DepartmentListComponent},
  {path:'departments/:id', 
  component: DepartmentDetailComponent,
  children :[
    {path:'overview',component:DepartmentOverviewComponent},
    {path:'contact',component:DepartmentContactComponent}
  ]
},
  {path:'employees', component:EmployeetListComponent},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingsCompoents = [DepartmentListComponent, EmployeetListComponent,
   PageNotFoundComponent,DepartmentContactComponent,  DepartmentOverviewComponent, DepartmentOverviewComponent ]
