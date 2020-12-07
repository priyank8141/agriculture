import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { Signup1Component } from './main/signup1/signup1.component';
import { ViewComponent } from './main/view/view.component';

const routes: Routes = [
  {
    path:"",
    component:ViewComponent,
    pathMatch:"full"
  },
  {
  path:"login",
  component:LoginComponent,
  pathMatch:"full"
  },
  {
  path:"signup",
  component:Signup1Component,
  pathMatch:"full"
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
