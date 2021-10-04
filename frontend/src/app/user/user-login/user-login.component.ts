import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private authService: AuthService,
                private alertify: AlertifyService,
                private router: Router) { }

  ngOnInit(): void {
  }
  // get userName(){
  //   return this.loginForm.get('userName') as FormControl;
  // }
   onLogin(loginForm: NgForm){
     const {userName,password}=loginForm.value;
     const user= this.authService.authUser(userName,password)
     if(user){
       console.log('user login')
       localStorage.setItem('token',userName);
       loginForm.reset();
       this.alertify.success("login successful");
       this.router.navigate(['/']);
     }
     else {
       console.log('username or password not matching')
       this.alertify.error("login failed!try again ");

     }

   }

}
