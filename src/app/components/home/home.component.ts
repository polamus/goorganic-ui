import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dispatcher } from '../../dispatcher/Dispatcher';
import {Action} from '../../dispatcher/Action';
import {HomeStore} from './Home.store';
import {Router} from '@angular/router';

import { HostListener } from '@angular/core';

@Component({
	selector: "home",
	templateUrl: "home.component.html"
})

export class HomeComponent implements OnInit {
	
	title:string = "null";
	isclickAboutClicked:boolean = false;
	clsArrOkBtn:boolean = true;

	constructor(private dispatcher:Dispatcher, public homeStore: HomeStore, private router:Router) {

	};

	ngOnInit(){
	   this.dispatcher.registerListener(this.receiveDispatch.bind(this));
	};

	receiveDispatch = function (action: Action) {
	  const payload = action.payload;

	  switch (action.actionType) {
	    case 'clickAbout':
	      this.isclickAboutClicked  = true;
	      this.router.navigate(['about', '']);
	      break;
	    default:
	  }
	};

	clickAbout(){
	  const action = new Action('clickAbout', {} );
	  this.dispatcher.dispatchAction(action);
	};
}; 
