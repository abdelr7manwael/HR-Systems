import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './shared/home/home.component';
import { EmpListComponent } from './employees/emp-list/emp-list.component';
import { AddEmpComponent } from './employees/add-emp/add-emp.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { UpdateEmpComponent } from './employees/update-emp/update-emp.component';
import { AddMngComponent } from './managers/add-mng/add-mng.component';
import { UpdateMngComponent } from './managers/update-mng/update-mng.component';
import { MngListComponent } from './managers/mng-list/mng-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    EmpListComponent,
    AddEmpComponent,
    UpdateEmpComponent,
    AddMngComponent,
    UpdateMngComponent,
    MngListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
