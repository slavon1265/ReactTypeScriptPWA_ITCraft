import {
    SET_ACTIVE_CURRENCY,
    SET_ACTIVE_INPUT_ID,
    SET_ACTIVE_INPUT_VALUE, SET_EXCHANGE_CURRENCY,
} from "../utils/consts";

const initialState = {
    activeInputID: '1',
    activeInputValue: '1',
}

export default (state= initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_INPUT_ID:
            return {...state, activeInputID: action.payload};
        case SET_ACTIVE_INPUT_VALUE:
            return {...state, activeInputValue: action.payload};
        default :
            return state
    }
}

export const setActiveInputIdAction = payload => ({type: SET_ACTIVE_INPUT_ID, payload})
export const setActiveInputValueAction = payload => ({type: SET_ACTIVE_INPUT_VALUE, payload})