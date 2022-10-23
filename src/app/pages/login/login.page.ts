import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { loginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form:FormGroup;

  constructor(private router:Router, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.form = new loginPageForm(this.formbuilder).createForm();
  }
  
  
  login(){
    this.router.navigate(['home']);

  }

  register(){
    this.router.navigate(['register']);

  }
  
  propos(){
    this.router.navigate(['propos']);

  }


}
