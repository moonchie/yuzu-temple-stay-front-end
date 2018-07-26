import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Temple } from '../../temple.service';
import { BookingSubmission, BookingService } from '../../booking.service';

declare var $: any;

@Component({
  selector: 'section-reserve-form',
  templateUrl: './reserve-form.component.html',
  styleUrls: ['./reserve-form.component.css']
})
export class ReserveFormComponent implements OnInit, AfterViewInit {
  @Input() temple: Temple;
  bookingForm = new BookingSubmission();

  constructor(
    private myBookingService: BookingService
  ) { }

  ngOnInit() {
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
    this.bookingForm.templeID = this.temple._id;
    this.myBookingService.unconfirmedBooking = this.bookingForm;

    // if logged in
      // navigate to confirmation page
    // else
      // navigate to log in
  }
}
