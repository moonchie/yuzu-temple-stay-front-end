import { Component, OnInit, NgModule } from '@angular/core';
import { TempleService, Temple } from '../../temple.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-one-temple',
  templateUrl: './one-temple.component.html',
  styleUrls: ['./one-temple.component.css']
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
          this.id = myParams.get("id");
          this.fetchtempleDetails();
        });
    }

    fetchtempleDetails() {
      this.myTempleServ.getTempleItem(this.id)
        .then((response: Temple) => {
          this.templeItem = response;
        })
        .catch((err) => {
          alert("Sorry! There was a problem getting this temple");
          console.log(err);
        });
    }
  }


