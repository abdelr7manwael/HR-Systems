import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';
import { ApiFunctionsService } from './api-functions.service';

@Injectable({
  providedIn: 'root'
})
export class EmpApiService extends ApiFunctionsService<Employee> {

  constructor(http : HttpClient) {
    super("http://localhost:3000/employee", http);
  }
}
