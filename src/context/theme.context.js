import { useReducer } from "react";
import { createContext } from "react"
import { themeReducer } from "./reducer/theme.reducer";
import { TOGGLE_THEME } from "./ActionTypes";


const initState = {
    theme: 'light'
}

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initState);

    const toggleTheme = (val) => {
        console.log("1324", val);
        let newtheme = val === 'light' ? 'dark' : 'light';

        dispatch({ type: TOGGLE_THEME, payload: newtheme });
    }

    return (
        <ThemeContext.Provider
            value={{
                ...state,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

// const [state, dispatch] = useReducer(themeReducer, initState);

export default ThemeContext;