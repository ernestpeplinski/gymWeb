import { Component, OnInit } from '@angular/core';
import {Users} from '../../model/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // if(Users.loggedUser==null){
    //   this.router.navigate(['/login']);
    // }
  }

}
