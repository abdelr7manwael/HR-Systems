import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { manager } from 'src/app/models/manager';
import { EmpApiService } from 'src/app/sharedd/emp-api.service';
import { MngApiService } from 'src/app/sharedd/mng-api.service';

@Component({
  selector: 'app-add-mng',
  templateUrl: './add-mng.component.html',
  styleUrls: ['./add-mng.component.css']
})
export class AddMngComponent implements OnInit {
object = new manager;
  constructor(private serv:MngApiService, private router : Router) { }

  ngOnInit(): void {
  }
  save(){
    this.serv.post(this.object).subscribe(data =>{

      this.router.navigateByUrl('MngList');
    })
  }

}
