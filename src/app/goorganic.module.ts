import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';


import { routing } from './app.routes'
import { GoOrganicRoutingModule } from './goorganic-routing.module';
import { Dispatcher } from './dispatcher/Dispatcher';
import { MainFactory } from './factories/Main.factory';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AboutStore } from './components/about/About.store';
import { HeaderStore } from './components/header/Header.store';
import { HomeStore } from './components/home/Home.store';
import { LoginStore } from './components/login-form/Login.store';


import { OrganicComponent } from './goorganic.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  declarations: [
    OrganicComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    ToolbarComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    routing,
    BrowserModule,
    GoOrganicRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    NgbModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
              {provide: LocationStrategy, useClass: HashLocationStrategy},
              Dispatcher,
              MainFactory,
              HomeStore,
              AboutStore,
              HeaderStore,
              Angular2TokenService,
              HttpClient,
              LoginStore
              ],
  bootstrap: [OrganicComponent]
})
export class GoOrganicModule { }
