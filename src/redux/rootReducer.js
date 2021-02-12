import currencyReducer from "./currencyReducer";
import {combineReducers} from "redux";
import inputsReducer from "./inputsReducer";
import selectsReducer from "./selectsReducer";

export default combineReducers({
    currency : currencyReducer,
    inputs: inputsReducer,
    selects: selectsReducer
})