import { Component, OnInit } from '@angular/core';
import { TempleService, Temple } from '../../temple.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'section-temple-info',
  templateUrl: './temple-info.component.html',
  styleUrls: ['./temple-info.component.css']
})
export class TempleInfoComponent implements OnInit {
  id: string;
  templeItem: Temple;

  constructor(
    private myTempleServ: TempleService,
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
