import CurrencyService from "../../services/currencyService";
import {INITIAL_BASE_CURRENCY} from "../../utils/consts";
import { setInitialRatesAction } from "../currenciesFilterReducer";
import {setAllRatesAction} from "../currencyReducer";
import {Dispatch} from "redux";

const currencyService = new CurrencyService();

export const fetchAllCurrenciesRates = () => {
    return async (dispatch: Dispatch) => {
        const {rates} = await currencyService.getAllRatesByCurrency(INITIAL_BASE_CURRENCY)
        return dispatch(setAllRatesAction(rates))
    }
}

export const fetchInitialCurrenciesRatesForFilters = () => {
    return async (dispatch: Dispatch) => {
        const {rates} = await currencyService.getAllRatesByCurrency(INITIAL_BASE_CURRENCY)
        return dispatch(setInitialRatesAction(rates))
    }
}
