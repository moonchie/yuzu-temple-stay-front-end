import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app';

constructor(
  public myAuthService: AuthService
){}


// not sure here??
ngOnInit(){
  this.myAuthService.check()
    .catch((err) => {
      console.log(err)
    })
  }

logout
logoutClick(){
  this.myAuthService.logout()
  .catch((err) => {
    alert("babababab")
    console.log(err)
  })
}

}
