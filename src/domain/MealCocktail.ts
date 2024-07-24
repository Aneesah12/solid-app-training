export interface Meal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
}

export const blankMeal: Meal = {
    idMeal: '',
    strMeal: '',
    strCategory: '',
};

export interface Cocktail {
    idDrink: string;
    strDrink: string;
    strCategory: string;
}

export const blankCocktail: Cocktail = {
    idDrink: '',
    strDrink: '',
    strCategory: '',
};