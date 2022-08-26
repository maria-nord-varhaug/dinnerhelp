import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Category, Dish, Ingredient } from 'src/app/Models';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private apiUrl = 'https://localhost:7074/FoodStore'

  constructor(private http:HttpClient) { }

  getCategories(): Observable<Category[]>{
    const url = `${this.apiUrl}/categories`;
    return this.http.get<Category[]>(url);
  }

  getIngredients(): Observable<Ingredient[]> {
    const url = `${this.apiUrl}/ingredients`;
    return this.http.get<Ingredient[]>(url);
  };
  getDishes(): Observable<Dish[]>{
    const url = `${this.apiUrl}/dishes`;
    return this.http.get<Dish[]>(url);
  };

  editIngredient(ingredient: Ingredient): Observable<Ingredient>{
    const url = `${this.apiUrl}/ingredients/${ingredient.id}`;
    return this.http.put<Ingredient>(url, ingredient, httpOptions);
  }

  deleteIngredient(ingredient: Ingredient): Observable<Ingredient> {
    const url = `${this.apiUrl}/ingredients/${ingredient.id}`;
    return this.http.delete<Ingredient>(url);
  };
  deleteDish(dish: Dish): Observable<Dish> {
    const url = `${this.apiUrl}/dishes/${dish.id}`;
    return this.http.delete<Dish>(url);
  };
}
