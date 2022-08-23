import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient.service';
import { Ingredient } from 'src/app/Models';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  @Output() onEditIngredient: EventEmitter<Ingredient> = new EventEmitter();
  ingredients: Ingredient[] = [];
  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.ingredientService.getIngredients().subscribe(
      (ingredients) =>(this.ingredients = ingredients)
      );
  }

  editIngredient(ingredient: Ingredient){
    this.onEditIngredient.emit(ingredient);
    //this.ingredientService.editIngredient(ingredient).subscribe()
  }

  deleteIngredient(ingredient: Ingredient){
    this.ingredientService.deleteIngredient(ingredient).subscribe(
      () => this.ingredients = this.ingredients.filter(i => i.id != ingredient.id))
  }



}
