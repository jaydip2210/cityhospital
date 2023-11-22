import { createContext, useReducer } from "react";
import { languageReducer } from "./reducer/language.reducer";
import { TOGGLE_LANGUAGE } from "./ActionTypes";

const initState = {
    language: 'english'
}

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(languageReducer, initState);

    const toggleLanguage = (val) => {
        console.log("jjj", val);

       

        dispatch({ type: TOGGLE_LANGUAGE, payload: val })
    }

    return (
        <LanguageContext.Provider
            value={{
                ...state,
                toggleLanguage
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContext;