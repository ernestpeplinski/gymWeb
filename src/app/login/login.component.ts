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

  constructor(private router: Router) {

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
    Users.loggedUser = tryLogUser;
    this.router.navigate(['/commonComponent']);
  }
  forgetPassword() {
   console.log("Po chuj zapominasz ?");
  }

}
