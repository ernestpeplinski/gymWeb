import {GymExcercises} from './gym-excercises';
import {NoEquipmentExcercises} from './no-equipment-excercises';
import {StreetWorkoutExcercises} from './street-workout-excercises';

export class CategoriesHandler{
    private static categories: Array<Category>;

public static getCategories(){
    if(CategoriesHandler.categories===undefined){
        CategoriesHandler.setCategories(2);
    }
  return CategoriesHandler.categories;
}

 public static setCategories(choose :number) {
     if(choose === 0){
         CategoriesHandler.categories = CategoryBuilder.build(ExcercisesType.StreetWorkout);
     }else if(choose === 1){
         CategoriesHandler.categories = CategoryBuilder.build(ExcercisesType.Gym);
     }else if(choose === 2){
         CategoriesHandler.categories = CategoryBuilder.build(ExcercisesType.NoEquipment);
     }
     
 }
}
enum ExcercisesType{
    NoEquipment,Gym,StreetWorkout
}
class CategoryBuilder{
    
  public static build(type :ExcercisesType) :Array<Category>{
    if(type === ExcercisesType.Gym){
        return JSON.parse(new GymExcercises().categories);
    }
    else if(type === ExcercisesType.NoEquipment){
            return JSON.parse(new NoEquipmentExcercises().categories);
    }else if (type === ExcercisesType.StreetWorkout){
        return JSON.parse(new StreetWorkoutExcercises().categories);
    }
  }
}

class Category{
  constructor(public isCollapsed? :boolean, public name? :string,public excercises? : Array<Excercise>){
        this.isCollapsed = false;
  }

}

export class Excercise {
    public name :string
    public description :string
    public photoLink :string
}

