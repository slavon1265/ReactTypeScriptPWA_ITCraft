import CurrencyService from "../../services/currencyService";
import {INITIAL_BASE_CURRENCY} from "../../utils/consts";
import {setAllRatesAction, setRatioAction} from "../currencyReducer";

const currencyService = new CurrencyService();

export const fetchAllCurrenciesRates = () => {
    return async dispatch => {
        const {rates} = await currencyService.getAllRatesByCurrency(INITIAL_BASE_CURRENCY)
        return dispatch(setAllRatesAction(rates))
    }
}

export const fetchCurrenciesRatio = (active, exchange) => {
    return async dispatch => {
        const ratio = await currencyService.getCurrencyRatio(active, exchange)
        return dispatch(setRatioAction(ratio))
    }
}