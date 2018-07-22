import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SplashComponent,
    ConceptComponent,
    SuggestionComponent,
    SeeAllDivComponent,
    YuzuIntroComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
