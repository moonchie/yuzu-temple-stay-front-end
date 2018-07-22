import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash/splash.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { SeeAllDivComponent } from './components/see-all-div/see-all-div.component';
import { ConceptComponent } from './components/concept/concept.component';

// Routing setup
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { YuzuIntroComponent } from './components/yuzu-intro/yuzu-intro.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';



@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    SuggestionComponent,
    SeeAllDivComponent,
    ConceptComponent,
    NotFoundPageComponent,
    YuzuIntroComponent,
    ContactInfoComponent,
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
