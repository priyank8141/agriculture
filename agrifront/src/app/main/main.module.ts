import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ViewComponent } from './view/view.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [HeaderComponent, ViewComponent, FooterComponent, LoginComponent],
  exports: [HeaderComponent,ViewComponent,LoginComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
