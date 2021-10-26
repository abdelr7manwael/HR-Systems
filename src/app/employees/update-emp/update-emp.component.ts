import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { ApiFunctionsService } from 'src/app/sharedd/api-functions.service';
import { EmpApiService } from 'src/app/sharedd/emp-api.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
id;

  constructor(private serv:EmpApiService, private router : Router,
     private activeRoute:ActivatedRoute) {
       this.id = this.activeRoute.snapshot.paramMap.get('id');

       this.serv.getById(this.id).subscribe((data:any)=>{
        this.object =data;
       })
      }
  

  ngOnInit(): void {
  }

  object = new Employee;



  update(){
    this.serv.put(this.object, this.id).subscribe(data =>{

      this.router.navigateByUrl('EmpList');
    })
  }

}
