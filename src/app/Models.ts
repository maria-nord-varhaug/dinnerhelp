//interface for ingredinets

export interface Category {
    id: number;
    name: string;
}

export interface Ingredient {
    id?: number;
    name: string;
    categoryId: number;
}

export interface Dish {
    id?: number;
    name: string;
    ingredientIds: number[];
}