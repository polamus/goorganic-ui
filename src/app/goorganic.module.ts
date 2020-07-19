import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { RouterModule, Routes } from '@angular/router';

import { routing } from './app.routes'
import { GoOrganicRoutingModule } from './goorganic-routing.module';
import { OrganicComponent } from './goorganic.component';
import { AboutComponent } from './components/about/about.component';
import { Dispatcher } from './dispatcher/Dispatcher';
import { MainFactory } from './factories/Main.factory';
import { AboutStore } from './components/about/About.store';


import {HashLocationStrategy, LocationStrategy} from '@angular/common';


const routes: Routes = [
  { path: '', component: AboutComponent },
];

@NgModule({
  declarations: [
    OrganicComponent,
    AboutComponent
  ],
  imports: [
    routing,
    BrowserModule,
    GoOrganicRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
              {provide: LocationStrategy, useClass: HashLocationStrategy},
              Dispatcher,
              MainFactory,
              AboutStore,
              ],
  bootstrap: [OrganicComponent]
})
export class GoOrganicModule { }
