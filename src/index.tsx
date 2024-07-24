import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import {MealList} from "./component/MealComponent";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./component/HomeComponent";
import {MealCocktailList} from "./component/MealCocktailComponent";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>

        <App>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="meals" element={<MealList/>}/>
                    <Route path="mealCocktail" element={<MealCocktailList/>}/>
                </Routes>
            </BrowserRouter>
        </App>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
