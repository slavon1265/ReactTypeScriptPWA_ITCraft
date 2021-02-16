import {
    ADD_SELECTS_VALUE,
    SET_ACTIVE_CURRENCY,
    SET_ACTIVE_INPUT_ID,
    SET_ACTIVE_INPUT_VALUE, SET_EXCHANGE_CURRENCY,
} from "../utils/consts";

const initialState = {
    selectsValues: {}
}

export default (state= initialState, action) => {
    switch (action.type) {
        case ADD_SELECTS_VALUE:
            return {...state, selectsValues: {...state.selectsValues, ...action.payload}};
        default :
            return state
    }
}

export const addSelectsValueAction = payload => ({type: ADD_SELECTS_VALUE, payload})