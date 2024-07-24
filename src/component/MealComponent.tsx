import {useMealState} from "../context/MealContext";


export function MealList() {

    //useMealState hook is used to access the values provided by the MealStateContext
    const { meal } = useMealState();

    //Retrieving data calling API directly
    // const [meal, setMyMeals] = useState<Meal>(blankMeal);
    //
    // useEffect(() => {
    //     fetchMeals().then((data) => setMyMeals(data));
    // }, []);


    return (
        <div>
            <p>Hello {meal?.idMeal}</p>
        </div>
    );
}

