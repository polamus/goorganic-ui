import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { RouterModule, Routes } from '@angular/router';

import { routing } from './app.routes'
import { GoOrganicRoutingModule } from './goorganic-routing.module';
import { OrganicComponent } from './goorganic.component';
import { HomeComponent } from './components/home/home.component';
import { Dispatcher } from './dispatcher/Dispatcher';
import { MainFactory } from './factories/Main.factory';
import { HomeStore } from './components/home/Home.store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutComponent } from './components/about/about.component';
import { AboutStore } from './components/about/About.store';
import { HeaderStore } from './components/header/Header.store';


import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { 
    path: '#/', 
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    OrganicComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    routing,
    BrowserModule,
    GoOrganicRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    NgbModule
  ],
  providers: [
              {provide: LocationStrategy, useClass: HashLocationStrategy},
              Dispatcher,
              MainFactory,
              HomeStore,
              AboutStore,
              HeaderStore
              ],
  bootstrap: [OrganicComponent]
})
export class GoOrganicModule { }
