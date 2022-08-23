import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/Models';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() ingredient!: Ingredient;
  @Output() onDeleteIngredient: EventEmitter<Ingredient> = new EventEmitter();
  @Output() onEditIngredient: EventEmitter<Ingredient> = new EventEmitter();
  faTimes = faTimes;
  constructor() { }

  onDelete(ingredient: Ingredient){
    this.onDeleteIngredient.emit(ingredient);
  }

  onEdit(ingredient:Ingredient){
    this.onEditIngredient.emit(ingredient);
  }
  ngOnInit(): void {
  }

}
