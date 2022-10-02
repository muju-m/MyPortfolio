import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted:boolean=false;
  constructor(private router:Router,private builder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm= this.builder.group(
      {
        
        email:["",[Validators.required,Validators.email]],
        password:["",[Validators.required,Validators.minLength(8)]]
      }
    );
  }
  public onLoginClick(){
    this.router.navigate(['./home']);
  }
  OnSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid)
      return;
    else
      alert("Form Submitted Successfully");
  }

  //to access the  form control in a view to display the error
  get f(){
    return this.loginForm.controls;
  }

  public onSignUpClick(){
    this.router.navigate(['./signup']);
  }
}
