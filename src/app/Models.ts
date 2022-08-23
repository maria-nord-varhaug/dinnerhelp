//interface for ingredinets

export enum Categories {
    Vegetable = "Vegetable",
    Fruit = "Fruit",
    Berry = "Berry",
    Meat = "Meat",
    Fish = "Fish",
    Pasta = "Pasta",
    Grain = "Grain",
    Rice = "Rice",
    Bean = "Bean",
    Fragrance = "Fragrance",
    Spice = "Spice",
    Fluids = "Fluids"
}

export interface Ingredient {
    id?: number;
    name: string;
    category: Categories;
}

export interface Dish {
    id?: number;
    name: string;
    ingredientIds: number[];
}