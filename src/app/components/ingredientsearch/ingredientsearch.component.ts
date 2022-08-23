import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/Models';
import { IngredientService } from 'src/app/services/ingredient.service';



@Component({
  selector: 'app-ingredientsearch',
  templateUrl: './ingredientsearch.component.html',
  styleUrls: ['./ingredientsearch.component.css']
})
export class IngredientsearchComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    
    this.ingredientService.getIngredients().subscribe((ingredients) =>(this.ingredients = ingredients));
  }

}
