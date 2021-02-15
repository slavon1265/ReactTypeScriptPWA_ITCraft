import currencyReducer from "./currencyReducer";
import {combineReducers} from "redux";
import inputsReducer from "./inputsReducer";
import selectsReducer from "./selectsReducer";
import authReducer from "./authReducer";

export default combineReducers({
    currency : currencyReducer,
    inputs: inputsReducer,
    selects: selectsReducer,
    auth: authReducer
})