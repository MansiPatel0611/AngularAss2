import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { Emp } from './Employee';

@Injectable()
export class EmployeeService{
    employees:Employee[]=[  {
                "firstname":"mansi",
                "lastname":"patel",
                "email":"mansi@gmail.com",
                "address":"vadodara",
                "username":"mannu",
                "password":"password",
                "gender":"female",
                "qualification":"manager",
                "experience":"0-1",
                "langKnown":["C/C++","Java","C#"]
                },
                {
                "firstname":"nancy",
                "lastname":"patel",
                "email":"nancy@gmail.com",
                "address":"surat",
                "username":"pnancy",
                "password":"n123456",
                "gender":"female",
                "qualification":"Devlepor",
                "experience":"1-3",
                "langKnown":["C/C++","C#"]
                },
                {
                "firstname":"priya",
                "lastname":"patel",
                "email":"priya@gmail.com",
                "address":"rajkot",
                "username":"piyu",
                "password":"patel07",
                "gender":"female",
                "qualification":"web designer",
                "experience":"0-1",
                "langKnown":["C#"]
                },
                {
                "firstname":"hitanshu",
                "lastname":"zavare",
                "email":"hitanshu@gmail.com",
                "address":"vadodara",
                "username":"sonu",
                "password":"hard12",
                "gender":"male",
                "qualification":"manager",
                "experience":"0-1",
                "langKnown":["C#","PHP"]
                }];

 constructor(){

        }


        getEmployees() {
            return this.employees;
        }

    getEmployeeData(e:Emp)
   {
       
       this.employees.push(e);
   }
   
   getEmployeeDataEdit(e:Emp)
   {
       var name=e.firstname;
       var index;
       for(var i=0;i<this.employees.length;i++)
       {
           if(this.employees[i].firstname===name)
           {index=i;
               break;
           }
       }
       this.employees.splice(index,1,e);
           //return this.employees;
   }
   
   removeEmployee(name)
   {

       console.log(name);
       var index;
       if (confirm(`Really delete the product: ${name}?`))
       {
       for(var i=0;i<this.employees.length;i++)
       {
           if(this.employees[i].firstname===name)
           {index=i;
               break;
           }
       }
      this.employees.splice(index,1);
       }
       return this.employees;
   }
   editEmployee(name)
   {
       
       var index;
       for(var i=0;i<this.employees.length;i++)
       {
           if(this.employees[i].firstname===name)
           {index=i;
               break;
           }
       }
       return this.employees[index];
   }

}
   
 