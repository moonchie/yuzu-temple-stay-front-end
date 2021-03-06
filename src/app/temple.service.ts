import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

const { backendUrl } = environment;


@Injectable({
  providedIn: 'root'
})

export class TempleService {
  constructor(private myHttpServ: HttpClient) {}

  // GET all telples /api/temples
  getList() {
    return this.myHttpServ
      .get(`${backendUrl}/api/temples`)
      .toPromise();
  }

  // GET /api/temple/:id
  getTempleItem(id) {
    return this.myHttpServ
      .get(`${backendUrl}/api/temple/${id}`,
        { withCredentials: true }
      )
      .toPromise();
  }
}


// Temple class
  export class Temple {
    _id: string;
    nameENG: string;
    nameJPG: string;
    address: string;
    contact: string;
    city: string;
    description: string;
    guests: string;
    beds: string;
    bath: string;
    price: number;
    Amentities: Array<object>;
    picture: Array<string>;
    geoLocation: Array<number>
  }

