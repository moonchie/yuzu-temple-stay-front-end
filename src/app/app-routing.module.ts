import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

// set up the routing module
const routes = [
  { path: "", component: AppComponent },
  { path: "**", component: NotFoundPageComponent}
];


@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  declarations: []
})
export class AppRoutingModule { }
