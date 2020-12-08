import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component implements OnInit {
  url = 'http://127.0.0.1:8000/signupapi/';
  restoform = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    gender:new FormControl(''),
    password:new FormControl(''),
  }) 
  constructor(private httpclient: HttpClient) {


   }
   callApi(){
     console.warn(this.restoform.value)
     this.httpclient.post(this.url,this.restoform.value).subscribe((data)=>{console.warn(data)})
   }
  ngOnInit(): void {
  }

}
