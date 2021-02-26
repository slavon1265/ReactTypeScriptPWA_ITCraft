import {CurrFilterAction, ActionTypes, ICurrenciesFilter} from "../types/reducers/currenciesFilterTypes";

const initialActiveRates = ['USD', 'EUR', 'GBP'];

const initialState: ICurrenciesFilter = {
    activeRates: initialActiveRates,
    leftRates: [],
}

export default (state= initialState, action: CurrFilterAction): ICurrenciesFilter => {
    switch (action.type) {
        case ActionTypes.ADD_ACTIVE_RATE:
            return {
                ...state, 
                activeRates: [...state.activeRates, action.payload], 
                leftRates: state.leftRates.filter(r => r != action.payload)
            };
        case ActionTypes.REMOVE_ACTIVE_RATE:
            return {
                ...state, 
                activeRates: state.activeRates.filter(r => r != action.payload),
                leftRates: [...state.leftRates, action.payload]
            }
        case ActionTypes.SET_INITIAL_RATES:
            return {
                ...state,
                leftRates: [...action.payload].map(c => c.name).filter(r => !state.activeRates.includes(r))
            }
        case ActionTypes.SET_ALL_RATES_AS_ACTIVE:
            return {
                ...state,
                leftRates: [],
                activeRates: [...state.activeRates, ...state.leftRates]
            }
        case ActionTypes.RESET_ALL_ACTIVE_RATES:
            return {
                ...state,
                activeRates: initialActiveRates,
                leftRates: [...state.leftRates, ...state.activeRates.filter(r => !initialActiveRates.includes(r))]
            }
        default :
            return state
    }
}

export const addActiveRateAction = (payload: string): CurrFilterAction => ({type: ActionTypes.ADD_ACTIVE_RATE, payload})
export const removeActiveRateAction = (payload: string): CurrFilterAction => ({type: ActionTypes.REMOVE_ACTIVE_RATE, payload})
export const setInitialRatesAction = (payload: Array<any>): CurrFilterAction => ({type: ActionTypes.SET_INITIAL_RATES, payload})
export const setAllRatesAsActiveAction = (): CurrFilterAction => ({type:ActionTypes.SET_ALL_RATES_AS_ACTIVE})
export const setAllActiveRatesDefaultAction = (): CurrFilterAction => ({type: ActionTypes.RESET_ALL_ACTIVE_RATES})