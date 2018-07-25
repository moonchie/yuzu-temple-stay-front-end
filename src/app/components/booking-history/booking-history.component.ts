import { Component, OnInit, NgModule } from '@angular/core';
import { BookingDetailsComponent } from '../booking-details/booking-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Booking, BookingService } from '../../booking.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  // id: string;
  bookings: Array<Booking> = [];

  constructor(
    private myBookingServ: BookingService,
    // private myActivatedRouteServ: ActivatedRoute,
    // private myRouterServ: Router

  ) { }

  ngOnInit() {
    this.fetchBookings();
  }

  fetchBookings() {
    this.myBookingServ.getHistory()
      .then((response: Array<Booking>) => {
        // connects the DATA from the API to the COMPONENT state
        this.bookings = response;
      })
      .catch((err) => {
        alert("Sorry! We couldn't get our list of bookings. 😕");
        console.log(err);
      });
  }
}
