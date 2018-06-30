import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import { Emp } from './Employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private _data:EmployeeService,private router:Router) { }


  public qualification:Array<any>;
  public experience:Array<any>;
  public languages:Array<any>;

    public model=new Emp();

    toggleEditable(event) {
     if ( event.target.checked ) {
         this.model.langKnown.push(event.target.id);
     }
     else
     {
      var index=this.model.langKnown.indexOf(event.target.id);
      this.model.langKnown.splice(index,1);
     }
    }  
  
  onSubmit()
  {
   this._data.getEmployeeData(this.model);
    this.router.navigate(['/employeeList']);
  }

  ngOnInit() {
     this.qualification=['Developer','Web Designer','Consultant','Manager','Other'];
  this.experience=['0-1','1-3','3-5','5-7','7-9'];
  this.languages=['C/C++','Java','C#','Python','PHP'];
  }

}
