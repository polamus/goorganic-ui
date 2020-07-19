
import { Injectable } from '@angular/core';
import { Action } from './Action';
import { Observable } from 'rxjs';

@Injectable()
export class Dispatcher{
	listeners: Array<any>;
	public actions:Array<Action>= [];
	public actionsObservable:Observable<Action>;

	constructor(){
	  this.listeners = [];
	  this.actions.push(new Action('foobar', {}));
	};

	public registerListener(listenFunc:() => any){
	  if(this.listeners.indexOf(listenFunc) === -1) {
	    this.listeners.push(listenFunc);
	  }
	};

	private notifyListeners(action:Action){
	  for(var i = 0; i < this.listeners.length; i++){
	    const listFunc = this.listeners[i];
	    listFunc(action);
	  }
	}

	public dispatchAction(action:Action){
	  this.actions.push(action);
	  this.notifyListeners(action);
	};
};