import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient.service';
import { Ingredient } from 'src/app/Models';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() ingredient!: Ingredient;
  @Output() onDeleteIngredient: EventEmitter<Ingredient> = new EventEmitter();
  
  constructor() { }

  onDelete(ingredient: Ingredient){
    this.onDeleteIngredient.emit(ingredient);
  }

  ngOnInit(): void {
  }

}
