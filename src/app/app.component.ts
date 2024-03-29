import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'employeemanagementapp';
  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService){ }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (resp: Employee[]) => {
        this.employees = resp;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
