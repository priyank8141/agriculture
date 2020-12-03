import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ViewComponent } from './view/view.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, ViewComponent, FooterComponent],
  exports: [HeaderComponent,ViewComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
