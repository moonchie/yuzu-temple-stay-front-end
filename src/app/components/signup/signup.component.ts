import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupSubmission, AuthService } from '../../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: SignupSubmission = new SignupSubmission();

  constructor(
    public myAuthServ: AuthService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
  }

  signupSubmit() {
    // pass the form inputs to the service
    this.myAuthServ.postSignup(this.signupForm)
      .then((response) => {
        // redirect away to the home page
        this.myRouterServ.navigateByUrl("/");
        console.log(response)
      })
      .catch((err) => {
        alert("Sorry! We couldn't sign you up. 🧐");
        console.log(err);
      });
  }
}