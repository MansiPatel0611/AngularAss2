import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from './Employee';
import { Emp } from './Employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  name:string;

  data=new Emp();
  

  constructor(private route:ActivatedRoute,private router:Router,private _employeeservice:EmployeeService) { 
    this.name=route.snapshot.params['name'];
  }

  ngOnInit() {
    this.data=this._employeeservice.editEmployee(this.name);    
  }

   onSubmit()
  {
   this._employeeservice.getEmployeeDataEdit(this.data);
    this.router.navigate(['/employeeList']);
   console.log(this.data);
  }
  on_cancel()
  {
    this.router.navigate(['/employeeList']);
  }
}
