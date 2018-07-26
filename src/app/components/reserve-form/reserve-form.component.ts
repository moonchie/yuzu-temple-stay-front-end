import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Temple } from '../../temple.service';
import { BookingSubmission, BookingService } from '../../booking.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'section-reserve-form',
  templateUrl: './reserve-form.component.html',
  styleUrls: ['./reserve-form.component.css']
})
export class ReserveFormComponent implements OnInit, AfterViewInit {
  @Input()
  temple: Temple;
  bookingForm = new BookingSubmission();

  constructor(
    private myBookingService: BookingService,
    private myAuthService: AuthService,
    public myRouterServ: Router
  ) { }

  ngOnInit() {
    this.myAuthService.check()
  .catch((err) => {
    alert("We cant log in you");
    console.log(err)
  })
  }

  ngAfterViewInit() {
    $(`#datetimepicker`).datetimepicker({
      dateFormat: "dd,MM,yy",
    });

    $('#datetimepicker').on('change.datetimepicker', (event) => {
      this.bookingForm.date = event.date.toString();
    });
  }

  bookingSubmit() {
    this.bookingForm.temple = this.temple;
    this.myBookingService.unconfirmedBooking = this.bookingForm;

    // if logged in
    if(this.myAuthService.currentUser){
    // navigate to confirmation page
    this.myRouterServ.navigateByUrl("/booking-confirmation");
    } else {
      // navigate to log in
    this.myRouterServ.navigateByUrl("/authentication");
    }

  }
}
