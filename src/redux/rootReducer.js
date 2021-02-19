import currencyReducer from "./currencyReducer";
import {combineReducers} from "redux";
import inputsReducer from "./inputsReducer";
import selectsReducer from "./selectsReducer";
import authReducer from "./authReducer";
import currenciesFilterReducer from "./currenciesFilterReducer";

export default combineReducers({
    currency : currencyReducer,
    inputs: inputsReducer,
    selects: selectsReducer,
    auth: authReducer,
    currencyFilters: currenciesFilterReducer
})