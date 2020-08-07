import {Component, OnInit, ViewChild} from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import { Dispatcher } from '../../dispatcher/Dispatcher';
import {Action} from '../../dispatcher/Action';
import { AdminComponent } from '../../components/admin/admin.component';

@Component({
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.sass']
})


export class ToolbarComponent implements OnInit {

   constructor(public tokenAuthService:Angular2TokenService, private dispatcher: Dispatcher,  public adminComponent: AdminComponent) { }

   ngOnInit() {
   }

   receiveDispatch = function (action: Action) {
	  const payload = action.payload;
      
      switch(action.actionType){
        default:
      }

	}

  presentAuthDialog(mode?: 'login'| 'register'){
    this.adminComponent.authMode =  mode
  }

}