import currencyReducer from "./currencyReducer";
import {combineReducers} from "redux";
import inputsReducer from "./inputsReducer";
import selectsReducer from "./selectsReducer";
import authReducer from "./authReducer";
import currenciesFilterReducer from "./currenciesFilterReducer";
import articlesReducer from "./articlesReducer";

export const rootReducer = combineReducers({
    currency : currencyReducer,
    inputs: inputsReducer,
    selects: selectsReducer,
    auth: authReducer,
    currencyFilters: currenciesFilterReducer,
    articles: articlesReducer
})

export type RootState = ReturnType<typeof rootReducer>