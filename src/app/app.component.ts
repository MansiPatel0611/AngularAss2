import { Component } from '@angular/core';
import { EmployeeService } from '../app/employee-list/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService]
})
export class AppComponent {
  title = 'app';
}
