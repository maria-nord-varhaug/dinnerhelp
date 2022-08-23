import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient.service';
import { Dish } from 'src/app/Models';



@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.ingredientService.getDishes().subscribe((dishes) =>(this.dishes = dishes));

  }

}
