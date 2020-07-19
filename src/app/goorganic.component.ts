

import { Component, OnInit, OnDestroy, ViewContainerRef, ViewEncapsulation, HostListener } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router, ActivatedRoute } from "@angular/router";
import {Dispatcher} from './dispatcher/Dispatcher';
import {Action} from './dispatcher/Action';
import {MainFactory} from './factories/Main.factory';
import {AboutStore} from './components/about/About.store'; 



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
              private aboutStore:AboutStore) {

            this._activatedRoute.queryParams.subscribe(url => {

            // this.globalStore.receiveUserParams(url);
            });
    }


    receiveDispatch = function(action:Action){
      const payload = action.payload;
    }
  
  ngOnInit() {
    this.dispatchHandler = this.receiveDispatch.bind(this);
    this.dispatcher.registerListener(this.dispatchHandler);

    this.mainFactory.initialize();
    this.aboutStore.initialize();
  }

}