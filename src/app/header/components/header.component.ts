import { Component, OnInit } from '@angular/core';
import {CategoriesHandler} from '../../model/excercises';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

setCategories(choose :number){
  CategoriesHandler.setCategories(choose);
  console.log(CategoriesHandler.getCategories());
}
get getCategories(){
  return CategoriesHandler.getCategories();
}
}
