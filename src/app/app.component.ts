import { Component, Input } from '@angular/core';
import { Ingredient } from './Models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showIngredients(){
    console.log("TOGGLED");
  }
  
}
