import { Component, OnInit, Input } from '@angular/core';
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  

  @Input('auth-mode') authMode: 'login' | 'register' = 'login';

  constructor(public tokenAuthService:Angular2TokenService) { }

  ngOnInit(): void {
  }


  isLoginMode(){return this.authMode == 'login'}
  isRegisterMode(){return this.authMode == 'register'}


}
