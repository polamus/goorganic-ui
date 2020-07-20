import {Injectable} from '@angular/core';
import {Dispatcher} from '../../dispatcher/Dispatcher';
import {Action} from '../../dispatcher/Action';
import {MainFactory} from '../../factories/Main.factory';


@Injectable()
export class HomeStore {
	
	title:string = "null";
	isclickAboutClicked:boolean = false;
	clsArrOkBtn:boolean = true;
	
	constructor(private dispatcher: Dispatcher, private mainFactory: MainFactory) {

	};

	receiveDispatch = function (action: Action) {
	  const payload = action.payload;
      
      switch(action.actionType){
        case 'clickAbout':
          this.isclickAboutClicked = true;
          this.loadAboutData();
          break;
        default:
      }

	}

	initialize() {
	  this.dispatcher.registerListener(this.receiveDispatch.bind(this));
	};

    // This has to change to fetch all categories data

	loadAboutData(){
	  this.mainFactory.getRequest('api/status').subscribe(
	    response => {
	      this.title = response.data;
	    }
	  )
	}
}