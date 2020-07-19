import {Injectable} from '@angular/core';
import {Dispatcher} from '../dispatcher/Dispatcher';
import {Action} from '../dispatcher/Action';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";

interface HttpOptions {
	[key: string]: any
}

@Injectable()
export class MainFactory {
	serverURL: string = '/';
	httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
	      .append('Accept', 'application/json');

	callInProgress: number = 0;

	constructor(private httpClient: HttpClient, private dispatcher: Dispatcher) {

	};

	initialize(){
	  this.dispatcher.registerListener(this.receiveDispatch.bind(this));
	};

	receiveDispatch = function (action: Action){
	  const payload = action.payload;

	  switch (action.actionType) {
	    case 'AJAXCallCompleted':
	      this.callInProgress--;
	      this.doNextCall();
	      break;
	    default:
	  }
	};


	public getRequest(url: string, params?: HttpParams, headers?:HttpHeaders): Observable<any> {
	  return this.httpClient.get(this.serverURL + url, { withCredentials: false, headers: headers || this.httpHeaders, params: params});
	};
}