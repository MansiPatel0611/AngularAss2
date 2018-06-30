import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { EditEmployeeComponent } from './employee-list/edit-employee.component';
import { AddEmployeeComponent } from './employee-list/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeListComponent,
    EditEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent}]),
      RouterModule.forChild([
      {path:'employeeList',component:EmployeeListComponent},
      {path:'editEmployee',component:EditEmployeeComponent},
      {path:'add-employee',component:AddEmployeeComponent,data:{name}}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
