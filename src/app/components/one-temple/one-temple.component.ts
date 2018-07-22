import { Component, OnInit, NgModule } from '@angular/core';
import { TempleSplashComponent } from '../temple-splash/temple-splash.component';
import { TempleInfoComponent } from '../temple-info/temple-info.component';
import { TempleReserveComponent } from '../temple-reserve/temple-reserve.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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
    TempleReserveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap:[OneTempleComponent]
})


export class OneTempleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
