import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl+'/employee';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServerUrl}/all`);
  }

  public getEmployeeById(employeeId: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.apiServerUrl}/find/${employeeId}`);
  }

  public addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServerUrl}/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServerUrl}/update`, employee);
  }

  public deletEmployeeById(employeeId: number): Observable<Employee>{
    return this.http.delete<Employee>(`${this.apiServerUrl}/delete/${employeeId}`);
  }


}
