import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import { EmployeeService } from './employee.service';
import { Emp } from './Employee';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[];

  constructor(private _employeeService:EmployeeService,private route:Router) { }

   editEmp(name)
  {
    //this.employees=this._employeeService.editEmployee(name);
    this.route.navigate(['editEmployee', {name}]);

  }

  deleteEmp(name)
  {
    //console.log(name);
    this.employees=this._employeeService.removeEmployee(name);
  }
  
  ngOnInit() {
    this.employees=this._employeeService.getEmployees();
  }

}
