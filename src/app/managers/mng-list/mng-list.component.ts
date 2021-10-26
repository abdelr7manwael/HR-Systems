import { Component, OnInit } from '@angular/core';
import { MngApiService } from 'src/app/sharedd/mng-api.service';

@Component({
  selector: 'app-mng-list',
  templateUrl: './mng-list.component.html',
  styleUrls: ['./mng-list.component.css']
})
export class MngListComponent implements OnInit {

  allData : [];
  constructor( private serv: MngApiService) {
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
