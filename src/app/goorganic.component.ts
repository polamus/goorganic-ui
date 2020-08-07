import { Component, OnInit, OnDestroy, ViewContainerRef, ViewEncapsulation, HostListener } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router, ActivatedRoute } from "@angular/router";
import {Angular2TokenService} from "angular2-token";

import {Dispatcher} from './dispatcher/Dispatcher';
import {Action} from './dispatcher/Action';
import {MainFactory} from './factories/Main.factory';
import {HomeStore} from './components/home/Home.store'; 
import {HeaderStore} from './components/header/Header.store'; 
import {AboutStore} from './components/about/About.store'; 
import {environment} from "../environments/environment";
import {LoginStore} from './components/login-form/Login.store'; 


@Component({
  selector: 'goorganic',
  templateUrl: './goorganic.component.html',
  styleUrls: ['./goorganic.component.css']
})

export class OrganicComponent implements OnInit {
  
    public dispatchHandler;

  
    constructor(private _activatedRoute:ActivatedRoute,
              private router:Router,
              private mainFactory:MainFactory,
              private dispatcher:Dispatcher,
              private homeStore:HomeStore,
              private headerStore:HeaderStore,
              private aboutStore:AboutStore,
              private loginStore:LoginStore,
              private authToken: Angular2TokenService) {

        this.authToken.init(environment.token_auth_config);
    }


    receiveDispatch = function(action:Action){
      const payload = action.payload;
    }
  
  ngOnInit() {
    this.dispatchHandler = this.receiveDispatch.bind(this);
    this.dispatcher.registerListener(this.dispatchHandler);

    this.mainFactory.initialize();
    this.homeStore.initialize();
    this.aboutStore.initialize();
    this.headerStore.initialize();
    this.loginStore.initialize();
  }

}