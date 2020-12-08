import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ViewComponent } from './view/view.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from '../app-routing.module';

import { Signup1Component } from './signup1/signup1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, ViewComponent, FooterComponent, LoginComponent, Signup1Component],
  exports: [HeaderComponent,ViewComponent,LoginComponent,Signup1Component],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
