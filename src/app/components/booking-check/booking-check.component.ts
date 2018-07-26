import { Component, OnInit} from '@angular/core';
import { AuthService, User } from '../../auth.service';
import { Router } from '@angular/router';
import { BookingService, BookingSubmission } from '../../booking.service';
import { TempleService } from '../../temple.service';

@Component({
  selector: 'app-booking-check',
  templateUrl: './booking-check.component.html',
  styleUrls: ['./booking-check.component.css']
})
export class BookingCheckComponent implements OnInit {
  currentUser: User;
  unconfirmedBooking:BookingSubmission;
  placeHolder;
  totalCost;
  // completingStuff: {
  //   templeName: this.myBookingService.unconfirmedBooking.nameENG
  // }


  constructor(
    private myAuthService: AuthService,
    private myRouteService: Router,
    private myBookingService: BookingService,
    private myTempleService: TempleService
  ) { }

  ngOnInit() {
    this.myAuthService.check()
    .then(() => {
      this.placeHolder = this.myBookingService.unconfirmedBooking;
      console.log(this.placeHolder);
      this.currentUser = this.myAuthService.currentUser;
      this.totalCost = this.placeHolder.nights * this.placeHolder.temple.price;
    })
  .catch((err) => {
    // alert("We cant log in you");
    console.log(err)
  })
}

postBookingSubmission (){
  console.log(this.placeHolder);
  let dataToBackend = {
    templeName: this.placeHolder.temple.nameENG,
    templePicture: this.placeHolder.temple.picture[0],
    nights: this.placeHolder.nights,
    date:this.placeHolder.date,
    guests: this.placeHolder.guests,
    totalCost: this.totalCost,
    userId: this.currentUser._id
  }
  // pass the data to backend
  this.myBookingService.postBookingData(dataToBackend)
  .then((data)=>{
    this.myRouteService.navigateByUrl("/");          //<----change
    //confirmation screen
  })
  .catch(( err ) => {
   console.log(err);
  })
}


}
