import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Users} from '../model/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

login: string="";
password: string="";
hiddenMessage :string="";
validcaptcha :string="";

randomCaptcha :number;
  constructor(private router: Router) {
   this.randomCaptcha =  Math.floor(Math.random() * (1000 - 100)) + 100;
  }

  ngOnInit() {
    if(Users.loggedUser!=null){
      this.router.navigate(['/commonComponent']);
    }
  }

  logToService() {
    const tryLogUser = Users.getUsers().find( x => x.login === this.login && x.password === this.password);
    if(tryLogUser === undefined){
      return;
    }
    if(+this.validcaptcha===this.randomCaptcha){
      return;
    }
    Users.loggedUser = tryLogUser;
    this.router.navigate(['/commonComponent']);
  }
  forgetPassword() {
    this.hiddenMessage = "Tu jest podpowiedz na haslo";
  }

}
