
import { Injectable } from '@angular/core';
import { Action } from './Action';
import { Observable } from 'rxjs';

@Injectable()
export class Dispatcher{
	listeners: Array<any>;
	public actions:Array<Action>= [];
	public actionsObservable.Observable<Action>;

	constructor(){
	  this.listeners = [];
	  this.actions.push(new Action('foobar', {}));
	};

	public registerListener(listnerFunc:()) => any){
	  if(this.listeners.indexOf(listenerFunc) === -1) {
	    this.listeners.push(listnerFunc);
	  }
	};



	public dispatchAction(action:Action){
	  this.actions.push(action);
	  this.notifyListeners(action);
	};
};