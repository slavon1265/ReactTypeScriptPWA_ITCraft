import {
    SET_ACTIVE_CURRENCY,
    SET_ACTIVE_INPUT_ID,
    SET_ACTIVE_INPUT_VALUE, SET_ALL_RATES,
    SET_EXCHANGE_CURRENCY,
    SET_RATIO
} from "../utils/consts";

const initialState = {
    activeCurrency: 'USD',
    allRates: [],
    ratio: 1
}

export default (state= initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_CURRENCY:
            return {...state, activeCurrency: action.payload};
        case SET_EXCHANGE_CURRENCY:
            return {...state, exchangeCurrency: action.payload};
        case SET_RATIO:
            return {...state, ratio: action.payload}
        case SET_ALL_RATES:
            return {...state, allRates: action.payload}
        default :
            return state
    }
}

export const setActiveCurrencyAction = payload => ({type: SET_ACTIVE_CURRENCY, payload})
export const setExchangeCurrencyAction = payload => ({type: SET_EXCHANGE_CURRENCY, payload})
export const setRatioAction = payload => ({type: SET_RATIO, payload})
export const setAllRatesAction = payload => ({type:SET_ALL_RATES, payload})