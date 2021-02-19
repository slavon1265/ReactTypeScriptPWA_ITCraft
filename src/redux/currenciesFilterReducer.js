import {
    ADD_ACTIVE_RATE,
    REMOVE_ACTIVE_RATE, SET_ALL_RATES_AS_ACTIVE,
    SET_INITIAL_RATES,
} from "../utils/consts";

const initialState = {
    activeRates: ['USD', 'EUR', 'GBP'],
    leftRates: [],
}

export default (state= initialState, action) => {
    switch (action.type) {
        case ADD_ACTIVE_RATE:
            return {
                ...state, 
                activeRates: [...state.activeRates, action.payload], 
                leftRates: state.leftRates.filter(r => r != action.payload)
            };
        case REMOVE_ACTIVE_RATE:
            return {
                ...state, 
                activeRates: state.activeRates.filter(r => r != action.payload),
                leftRates: [...state.leftRates, action.payload]
            }
        case SET_INITIAL_RATES:
            return {
                ...state,
                leftRates: [...action.payload].map(c => c.name).filter(r => !state.activeRates.includes(r))
            }
        case SET_ALL_RATES_AS_ACTIVE:
            return {
                ...state,
                leftRates: [],
                activeRates: [...state.activeRates, ...state.leftRates]
            }
        default :
            return state
    }
}

export const addActiveRateAction = payload => ({type: ADD_ACTIVE_RATE, payload})
export const removeActiveRateAction = payload => ({type: REMOVE_ACTIVE_RATE, payload})
export const setInitialRatesAction = payload => ({type: SET_INITIAL_RATES, payload})
export const setAllRatesAsActiveAction = payload => ({type:SET_ALL_RATES_AS_ACTIVE})