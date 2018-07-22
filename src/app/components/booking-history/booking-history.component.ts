import { Component, OnInit, NgModule } from '@angular/core';
import { UserInfoComponent } from '../user-info/user-info.component';
import { BookingDetailsComponent } from '../booking-details/booking-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})

@NgModule({
  declarations: [
    BookingHistoryComponent,
    // children components
    UserInfoComponent,
    BookingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [BookingHistoryComponent]
})


export class BookingHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
