import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dispatcher } from '../../dispatcher/Dispatcher';
import {Action} from '../../dispatcher/Action';
import {AboutStore} from './About.store';
import {Router} from '@angular/router';

import { HostListener } from '@angular/core';

@Component({
	selector: "about",
	templateUrl: "about.component.html"
})

export class AboutComponent implements OnInit {
	
	title:string = "null";
	isAboutClicked:boolean = false;
	clsArrOkBtn:boolean = true;

	constructor(private dispatcher:Dispatcher, public aboutStore: AboutStore, private router:Router) {

	};

	ngOnInit(){
	   this.dispatcher.registerListener(this.receiveDispatch.bind(this));
	};

	receiveDispatch = function (action: Action) {
	  const payload = action.payload;

	  switch (action.actionType) {
	    case 'aboutClick':
	      this.isAboutClicked  = true;
	      break;
	    default:
	  }
	};

	clickAbout(){
	  const action = new Action('aboutClick', {} );
	  this.dispatcher.dispatchAction(action);
	};
}; 
