import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor( private formBuider: FormBuilder, private router: Router  ) { }

  ngOnInit() {
    this.form=this.formBuider.group({
      username: this.formBuider.control('',Validators.required),
      password: this.formBuider.control('',Validators.required)
    })

  }
  onSubmit(){
    this.router.navigate(['home']);
  }
}
