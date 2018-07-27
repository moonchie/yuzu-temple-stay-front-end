import { Component, OnInit, NgModule } from '@angular/core';

import { Booking, BookingService } from '../../booking.service';
import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
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
