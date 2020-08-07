import {Injectable} from '@angular/core';
import {Dispatcher} from '../../dispatcher/Dispatcher';
import {Action} from '../../dispatcher/Action';
import {MainFactory} from '../../factories/Main.factory';
import {Router} from '@angular/router';


@Injectable()
export class LoginStore {
	
	constructor(private dispatcher: Dispatcher, private mainFactory: MainFactory, private router:Router) {

	};

	receiveDispatch = function (action: Action) {
	  const payload = action.payload;
      
      switch(action.actionType){
        case 'loginInSuccess':
        default:
      }

	}

	initialize() {
	  this.dispatcher.registerListener(this.receiveDispatch.bind(this));
	};

}