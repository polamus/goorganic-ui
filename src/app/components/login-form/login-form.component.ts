import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import { AdminComponent } from '../../components/admin/admin.component';
import { Dispatcher } from '../../dispatcher/Dispatcher';
import {Action} from '../../dispatcher/Action';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  signInUser = {
    email: '',
    password: ''
  };

  constructor(private tokenAuthSerivce:Angular2TokenService, public adminComponent: AdminComponent, private dispatcher: Dispatcher) { }

  ngOnInit() {}


	receiveDispatch = function (action: Action) {
	  const payload = action.payload;
	  
	  switch(action.actionType){
	    default:
	  }

	}

  onSignInSubmit(){

    this.tokenAuthSerivce.signIn(this.signInUser).subscribe(

        res => {
          if(res.status == 200){
            this.adminComponent.authMode = 'login'
            const action = new Action('loginInSuccess', {} );
	        this.dispatcher.dispatchAction(action);
          }
        },

        err => {
          console.log('err:', err);
        }
    )

  }


}