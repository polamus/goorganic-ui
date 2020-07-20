import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dispatcher } from '../../dispatcher/Dispatcher';
import {Action} from '../../dispatcher/Action';
import {AboutStore} from './About.store';
import {Router} from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


import { HostListener } from '@angular/core';

@Component({
	selector: "about",
	templateUrl: "about.component.html"
})

export class AboutComponent implements OnInit {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
	
	constructor(private dispatcher:Dispatcher, public aboutStore: AboutStore, private router:Router) {

	};

	ngOnInit(){
	   this.dispatcher.registerListener(this.receiveDispatch.bind(this));
	};

	receiveDispatch = function (action: Action) {
	  const payload = action.payload;

	  switch (action.actionType) {
	    default:
	  }
	};
}; 
