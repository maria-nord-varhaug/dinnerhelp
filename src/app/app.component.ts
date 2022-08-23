import { Component } from '@angular/core';
import { Ingredient } from './Models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editCard: boolean = false;
  editIngredient(ingredient: Ingredient){
    console.log(ingredient);
    this.editCard = true;
  }

  showIngredients(){
    console.log("TOGGLED");
  }
  
}
