import {Injectable} from '@angular/core';
import {Dispatcher} from '../../dispatcher/Dispatcher';
import {Action} from '../../dispatcher/Action';
import {MainFactory} from '../../factories/Main.factory';


@Injectable()
export class AboutStore {

    title:string = "Not changed";
	isAboutClicked:boolean = false;

	constructor(private dispatcher: Dispatcher, private mainFactory: MainFactory) {

	};

	receiveDispatch = function (action: Action) {
	  const payload = action.payload;
      
      switch(action.actionType){
        case 'aboutClick':
          this.isAboutClicked = true;
          this.loadAboutData();
          break;
        default:
      }

	}

	initialize() {
	  this.dispatcher.registerListener(this.receiveDispatch.bind(this));
	};

	loadAboutData(){
	  this.mainFactory.getRequest('api/status').subscribe(
	    response => {
	      this.title = response.data;
	    }
	  )
	}
}