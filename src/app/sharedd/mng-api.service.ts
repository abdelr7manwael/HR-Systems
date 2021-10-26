import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { manager } from '../models/manager';
import { ApiFunctionsService } from './api-functions.service';

@Injectable({
  providedIn: 'root'
})
export class MngApiService extends ApiFunctionsService<manager> {

  constructor(http : HttpClient) {
    super("http://localhost:3000/managers", http);
  }
}


// http://localhost:3000/managers