import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpComponent } from './employees/add-emp/add-emp.component';
import { EmpListComponent } from './employees/emp-list/emp-list.component';
import { UpdateEmpComponent } from './employees/update-emp/update-emp.component';
import { AddMngComponent } from './managers/add-mng/add-mng.component';
import { MngListComponent } from './managers/mng-list/mng-list.component';
import { UpdateMngComponent } from './managers/update-mng/update-mng.component';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { MngApiService } from './sharedd/mng-api.service';


const routes: Routes = [
  {path:'home', component :HomeComponent },
  {path:'', component :HomeComponent },
  {path:'AddEmp', component :AddEmpComponent },
  {path:'AddMng', component :AddMngComponent },
  {path:'EmpList', component :EmpListComponent },
  {path: 'MngList', component: MngListComponent},
  {path: 'update-emp/:id' , component: UpdateEmpComponent},
  {path: 'update-mng/:id', component: UpdateMngComponent},
  {path:'**', component :NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
