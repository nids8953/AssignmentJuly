import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { IUserModel } from '../user.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage=null;
  loginForm : FormGroup;
  userdata: IUserModel;
  constructor(private formBuilder: FormBuilder, public route : Router, private authService : AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username : ['' , Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm($event =null){
   // this.route.navigate(['/dashboard']);
    this.errorMessage=null;
    if(!this.loginForm.invalid) {
      this.userdata = this.loginForm.value;
      this.authService.authenticateUser(this.userdata).subscribe(result => {
        if(result) {
            //success
        
            this.onSuccessOfLogin();

        }
        else
        {   //failure
            this.onFailureOfLogin('Wrong credentails entered');
        }
      },
      (err)=>{
        //on error
        this.onFailureOfLogin(err);
      });
    }
  }

  onFailureOfLogin(errorMessage : string) {
      this.errorMessage=errorMessage;
  }

  onSuccessOfLogin() {
    this.route.navigate(['/dashboard']);
  }
}
