import { Component, OnInit } from '@angular/core';
import {HeaderStore} from './Header.store';
import {Router} from '@angular/router';
import { Dispatcher } from '../../dispatcher/Dispatcher';
import {Action} from '../../dispatcher/Action';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(private dispatcher: Dispatcher, private headerStore: HeaderStore) {

	};

	ngOnInit(){

	};

	receiveDispatch = function (action: Action) {
	  const payload = action.payload;
      
      switch(action.actionType){
        default:
      }

	}

  clickAbout(){
	const action = new Action('clickAbout', {} );
	this.dispatcher.dispatchAction(action);
  };

  clickHome(){
    const action = new Action('clickHome', {} );
	this.dispatcher.dispatchAction(action);
  }

}
