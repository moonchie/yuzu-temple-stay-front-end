import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const backendUrl = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;

  constructor(
    private myHttpServ: HttpClient
  ) { }

  // GET checkLogin
  check() {
    return this.myHttpServ
      .get(
        `${backendUrl}/api/checklogin`,
        { withCredentials: true } // send cookies across domains
      )
      .toPromise()
      .then((response: any) => {
        // update "currentUser" to match what the backend reports
        this.currentUser = response.userDoc;
        return response;
      });
  }

  // POST LogIn connect backend to frontend
  postLogin(loginInfo: LoginSubmission) {
    return this.myHttpServ
      .post(
        `${backendUrl}/api/authentication`,
        loginInfo,
        { withCredentials: true } // send cookies across domains
      )
      .toPromise()
      .then((response: any) => {
        // update "currentUser" if we log in successfully
        this.currentUser = response.userDoc;
        return response;
      });
  }

  // POST Signup connect backend to frontend
  postSignup(signupInfo: SignupSubmission) {
    return this.myHttpServ
      .post(
        `${backendUrl}/api/register`,
        signupInfo,
        { withCredentials: true } // send cookies across domains
      )
      .toPromise()
      .then((response: any) => {
        // update "currentUser" if we sign up successfully
        this.currentUser = response.userDoc;
        return response;
      });
  }

  // DELETE Logout
  logout() {
    return this.myHttpServ
      .delete(
        `${backendUrl}/api/logout`,
        { withCredentials: true } // send cookies across domains
      )
      .toPromise()
      .then((response: any) => {
        // update "currentUser" if we log out successfully
        this.currentUser = response.userDoc;
        return response;
      });
  }
}

export class User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export class LoginSubmission {
  email: string;
  loginPassword: string;
}

export class SignupSubmission {
  firstName: string;
  lastName: string;
  email: string;
  originalPassword: string;
}
