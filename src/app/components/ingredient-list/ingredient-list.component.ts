import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient.service';
import { Ingredient } from 'src/app/Models';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  deletedIngredients: Ingredient[] = [];

  constructor(private ingredientService: IngredientService, public auth: AuthService) { }

  ngOnInit(): void {
    this.ingredientService.getIngredients().subscribe(
      (ingredients) =>(this.ingredients = ingredients)
      );
  }


  deleteIngredient(ingredient: Ingredient){
  
    this.ingredientService.deleteIngredient(ingredient).subscribe(
      ()=>this.ingredients = this.ingredients.filter(i => i.id != ingredient.id)
    )
  }

}
