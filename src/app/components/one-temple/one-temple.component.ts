import { Component, OnInit, NgModule } from '@angular/core';
import { TempleSplashComponent } from '../temple-splash/temple-splash.component';
import { TempleInfoComponent } from '../temple-info/temple-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { TempleService, Temple } from '../../temple.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-one-temple',
  templateUrl: './one-temple.component.html',
  styleUrls: ['./one-temple.component.css']
})

// connect to children components
@NgModule({
  declarations: [
    OneTempleComponent,
    TempleSplashComponent,
    TempleInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // providers: [QuestionService],
  bootstrap:[OneTempleComponent],
})


export class OneTempleComponent implements OnInit {
  id: string;
  templeItem: Temple;

  constructor(private myTempleServ: TempleService,
    private myActivatedRouteServ: ActivatedRoute,
    private myRouterServ: Router) { }

    ngOnInit() {
      this.myActivatedRouteServ.paramMap
        .subscribe((myParams) => {
          // "phoneId" comes from the route's PATH
          // { path: "phone/:phoneId", ... }
          this.id = myParams.get("id");
          this.fetchtempleDetails();
        });
    }

    fetchtempleDetails() {
      this.myTempleServ.getTempleItem(this.id)
        .then((response: Temple) => {
          // connects the DATA from the API to the COMPONENT state
          this.templeItem = response;
        })
        .catch((err) => {
          alert("Sorry! There was a problem getting this temple");
          console.log(err);
        });
    }
  }


