import React, {useEffect, useState} from "react";
import {fetchMeals} from "../gateway/MealGateway";
import {fetchCocktails} from "../gateway/CocktailGateway";
import {blankCocktail, blankMeal, Cocktail, Meal} from "../domain/MealCocktail";

export interface MealContextProviderProps {
    children: React.ReactNode;
}

export interface MealState {
    meal?: Meal,
    cocktail?: Cocktail,
}

const defaultMealState = {};

//creates context object, which will hold the meal data
export const MealStateContext = React.createContext<MealState>(defaultMealState);

//MealContextProvider component wraps its children with the context provider
export function MealContextProvider({ children }: MealContextProviderProps): React.ReactElement {
    const [myMeals, setMyMeals] = useState<Meal>(blankMeal);
    const [myCocktails, setMyCocktails] = useState<Cocktail>(blankCocktail);

    useEffect(() => {
        fetchMeals().then((data) => setMyMeals(data));
        fetchCocktails().then((data) => setMyCocktails(data));
    }, []);

    const state: MealState = {
        meal: myMeals,
        cocktail: myCocktails
    }

    return (
        <MealStateContext.Provider value={state}>
            {children}
        </MealStateContext.Provider>
    )

}

//the useContext hook will be used to access values provided by the MealStateContext
export function useMealState(): MealState {
    return React.useContext(MealStateContext);
}
