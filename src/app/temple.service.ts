import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

const { backendUrl } = environment;

// const backendUrl = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})

export class TempleService {
  constructor(private myHttpServ: HttpClient) {}

  getList() {
    return this.myHttpServ
      .get(`${backendUrl}/api/temples`)
      .toPromise();
  }}

  export class Temple {
    _id: string;
    nameENG: string;
    nameJPG: string;
    address: string;
    telephone: string;
    email: string;
    city: string;
    picture: Array<string>;
    description: string;
    specialties: Array<string>;
    mealType: string
  }

