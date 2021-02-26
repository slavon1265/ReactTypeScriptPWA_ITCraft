import {CurrencyAction, CurrencyTypes, ICurrency} from "../types/reducers/currencyTypes";

const initialState: ICurrency = {
    activeCurrency: 'USD',
    allRates: [],
}

export default (state= initialState, action: CurrencyAction) => {
    switch (action.type) {
        case CurrencyTypes.SET_ACTIVE_CURRENCY:
            return {...state, activeCurrency: action.payload};
        case CurrencyTypes.SET_ALL_RATES:
            return {...state, allRates: action.payload}
        default :
            return state
    }
}

export const setActiveCurrencyAction = (payload: string): CurrencyAction => ({type: CurrencyTypes.SET_ACTIVE_CURRENCY, payload})
export const setAllRatesAction = (payload: Array<any>): CurrencyAction => ({type: CurrencyTypes.SET_ALL_RATES, payload})