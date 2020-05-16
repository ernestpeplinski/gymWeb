import { Component, OnInit } from '@angular/core';
import {CategoriesHandler,Excercise} from '../../model/excercises';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  currentExcercise :Excercise;
  constructor() {
   this.currentExcercise = new Excercise();
   }

  ngOnInit() {
  }

  get Categories(){
    return CategoriesHandler.getCategories();
  }

  setCurrentExcercise(excercise :Excercise){
    this.currentExcercise = excercise;
  }

}
