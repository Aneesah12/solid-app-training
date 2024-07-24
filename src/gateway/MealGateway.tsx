import {Meal} from "../domain/MealCocktail";

export async function fetchMeals(): Promise<Meal> {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
    const data = await response.json();
    return data.meals[0];
}