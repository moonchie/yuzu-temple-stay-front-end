import { Component, OnInit, NgModule } from '@angular/core';
import { BookingDetailsComponent } from '../booking-details/booking-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Booking, BookingService } from '../../booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})

@NgModule({
  declarations: [
    BookingHistoryComponent,
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
  bookings: Array<Booking> = [];

  constructor(
    private myBookingService: BookingService,
    private myRouterService: Router,
    private myAuthService: AuthService

  ) { }

  ngOnInit() {
    this.myBookingService.getHistory()
      .then((response: Array<Booking>) => {
        this.bookings = response;
        console.log(this.bookings)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
