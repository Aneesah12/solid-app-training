import React from 'react';
import {MealContextProvider} from "./context/MealContext";

export interface AppSelectorProps {
    children: React.ReactNode;
}

function App ({ children }: AppSelectorProps): React.ReactElement  {
    return (
        <MealContextProvider>
            { children }
        </MealContextProvider>
    )
}

export default App;