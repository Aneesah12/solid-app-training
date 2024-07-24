import {Cocktail} from "../domain/MealCocktail";

export async function fetchCocktails(): Promise<Cocktail> {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const data = await response.json();
    return data.drinks[0];
}