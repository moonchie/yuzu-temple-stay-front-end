import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

const { backendUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  unconfirmedBooking: BookingSubmission;

  constructor(private myHttpServ: HttpClient) {}


  // GET the confirmation form


  // GET User's booking history
  getHistory() {
    return this.myHttpServ
      .get(`${backendUrl}/api/history`,
        { withCredentials: true }
      )
      .toPromise();
  }
}

  // POST booking to the database



// export Booking class
export class Booking {
  firstName: String;
  lastName: String;
  email: String;
  userID: String;
  templeID: Object;
  nights: String;
  date: String;
  guests: String;
  cost: Number
}

export class BookingSubmission {
  nights: number;
  guests: number;
  date: string;
  templeID: string;
}