import { Component, OnInit } from '@angular/core';
import { Temple, TempleService } from '../../temple.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-temples',
  templateUrl: './temples.component.html',
  styleUrls: ['./temples.component.css']
})
export class TemplesComponent implements OnInit {
  temples: Array<Temple> = [];

  constructor(
    private myTempleService: TempleService,
    private myRouterService: Router,
    private myAuthService: AuthService
  ) { }

  ngOnInit() {
    this.myTempleService.getList()
      .then((response: Array<Temple>) => {
        this.temples = response;
        console.log(this.temples[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }


  // ISSUE HERE!
  // templeClick(templeId){
  //  this.myTempleService.getTempleItem(templeId)
  //   .then(
  //     this.myRouterService.navigateByUrl(`/temple/${oneTemple._id}`)
  //   )
  //   .catch((err) => console.log(err))
  // }
}
