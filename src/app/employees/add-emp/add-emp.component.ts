import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { ApiFunctionsService } from 'src/app/sharedd/api-functions.service';
import { EmpApiService } from 'src/app/sharedd/emp-api.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  object = new Employee;
  constructor(private serv:EmpApiService, private router : Router) { }

  ngOnInit(): void {
  }

  save(){
    this.serv.post(this.object).subscribe(data =>{

      this.router.navigateByUrl('EmpList');
    })
  }

  
}
