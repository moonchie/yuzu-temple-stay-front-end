import { Component, OnInit } from '@angular/core';
import { LoginSubmission, AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: LoginSubmission = new LoginSubmission();

  constructor(
    public myAuthServ: AuthService,
    public myRouterServ: Router
  ) { }

  ngOnInit() {
  }

  loginSubmit() {
    // pass the form inputs to the service
    this.myAuthServ.postLogin(this.loginForm)
      .then((response) => {
        // redirect away to the home page
        this.myRouterServ.navigateByUrl("/");
      })
      .catch((err) => {
        alert("Sorry! There was a problem with your login. 😓");
        console.log(err);
      });
  }



}
