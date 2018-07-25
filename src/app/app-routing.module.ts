import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TemplesComponent } from './components/temples/temples.component';
import { OneTempleComponent } from './components/one-temple/one-temple.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BookingCheckComponent } from './components/booking-check/booking-check.component';
import { FinishedComponent } from './components/finished/finished.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';

// set up the routing module
const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "temples", component: TemplesComponent},
  { path: "temple/:id", component: OneTempleComponent},
  { path: "authentication", component: LoginComponent},
  { path: "register", component: SignupComponent},
  { path: "needconfirm", component: BookingCheckComponent},
  { path: "confirmation", component: FinishedComponent},
  { path: "history", component: BookingHistoryComponent},
  { path: "**", component: NotFoundPageComponent},
];


@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
