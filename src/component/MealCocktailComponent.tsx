import {useMealState} from "../context/MealContext";


export function MealCocktailList() {
    //useMealState hook is used to access the values provided by the MealStateContext
    const { meal, cocktail } = useMealState();

    //Retrieving data calling APIs directly
    // const [meal, setMyMeals] = useState<Meal>(blankMeal);
    // const [cocktail, setMyCocktails] = useState<Cocktail>(blankCocktail);
    //
    //
    // useEffect(() => {
    //     fetchMeals().then((data) => setMyMeals(data));
    //     fetchCocktails().then((data) => setMyCocktails(data));
    // }, []);

    return (
        <div>
            <p>Hello {meal?.idMeal}</p>
            <p>Hello {cocktail?.idDrink}</p>
        </div>
    );
}

