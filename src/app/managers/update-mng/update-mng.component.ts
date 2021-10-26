import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { manager } from 'src/app/models/manager';
import { MngApiService } from 'src/app/sharedd/mng-api.service';

@Component({
  selector: 'app-update-mng',
  templateUrl: './update-mng.component.html',
  styleUrls: ['./update-mng.component.css']
})
export class UpdateMngComponent implements OnInit {

  id;

  constructor(private serv:MngApiService, private router : Router,
     private activeRoute:ActivatedRoute) {
       this.id = this.activeRoute.snapshot.paramMap.get('id');

       this.serv.getById(this.id).subscribe((data:any)=>{
        this.object =data;
       })
      }
  

  ngOnInit(): void {
  }

  object = new manager;



  update(){
    this.serv.put(this.object, this.id).subscribe(data =>{

      this.router.navigateByUrl('MngList');
    })
  }

}
