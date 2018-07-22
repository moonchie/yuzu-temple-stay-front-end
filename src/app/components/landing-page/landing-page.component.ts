// import modules
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
// import children components
import { SplashComponent } from '../splash/splash.component';
import { SuggestionComponent } from '../suggestion/suggestion.component';
import { SeeAllDivComponent } from '../see-all-div/see-all-div.component';
import { ConceptComponent } from '../concept/concept.component';
import { YuzuIntroComponent } from '../yuzu-intro/yuzu-intro.component';
import { ContactInfoComponent } from '../contact-info/contact-info.component';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

// Add in NgModule to include children components
@NgModule({
  declarations: [
    //children components
    LandingPageComponent,
    SplashComponent,
    SuggestionComponent,
    SeeAllDivComponent,
    ConceptComponent,
    YuzuIntroComponent,
    ContactInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap:[LandingPageComponent]
})



export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
