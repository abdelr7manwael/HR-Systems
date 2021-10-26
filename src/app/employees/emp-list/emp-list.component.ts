import { Component, OnInit } from '@angular/core';
import { ApiFunctionsService } from 'src/app/sharedd/api-functions.service';
import { EmpApiService } from 'src/app/sharedd/emp-api.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
allData : [];
  constructor( private serv: EmpApiService) {
    this.serv.get().subscribe((data:any)=>{
      this.allData = data;
      
    })
   }

  ngOnInit(): void {
  }

  remove(id){
    return this.serv.delete(id).subscribe(data=>{
      window.location.reload();
    });
  }

  
  

}
