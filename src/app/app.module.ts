import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

// Components
import { AppComponent } from './app.component';

// Routing setup
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SplashComponent } from './components/splash/splash.component';
import { ConceptComponent } from './components/concept/concept.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { SeeAllDivComponent } from './components/see-all-div/see-all-div.component';
import { YuzuIntroComponent } from './components/yuzu-intro/yuzu-intro.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { TemplesComponent } from './components/temples/temples.component';
import { OneTempleComponent } from './components/one-temple/one-temple.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { TempleSplashComponent } from './components/temple-splash/temple-splash.component';
import { TempleInfoComponent } from './components/temple-info/temple-info.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BookingCheckComponent } from './components/booking-check/booking-check.component';
import { FinishedComponent } from './components/finished/finished.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { ReserveFormComponent } from './components/reserve-form/reserve-form.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SplashComponent,
    ConceptComponent,
    SuggestionComponent,
    SeeAllDivComponent,
    YuzuIntroComponent,
    ContactInfoComponent,
    TemplesComponent,
    OneTempleComponent,
    NotFoundPageComponent,
    TempleSplashComponent,
    TempleInfoComponent,
    LoginComponent,
    SignupComponent,
    BookingCheckComponent,
    FinishedComponent,
    BookingHistoryComponent,
    BookingDetailsComponent,
    ReserveFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCf_HT48FcYcTDGj-3il8DYk4VhKBAekiU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
