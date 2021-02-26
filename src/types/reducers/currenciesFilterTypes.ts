
export interface ICurrenciesFilter {
    activeRates: Array<string>;
    leftRates: Array<string>;
}

export enum ActionTypes {
    ADD_ACTIVE_RATE='ADD_ACTIVE_RATE',
    REMOVE_ACTIVE_RATE='REMOVE_ACTIVE_RATE',
    SET_INITIAL_RATES='SET_INITIAL_RATES',
    SET_ALL_RATES_AS_ACTIVE='SET_ALL_RATES_AS_ACTIVE',
    RESET_ALL_ACTIVE_RATES='RESET_ALL_ACTIVE_RATES',
}

interface AddActiveRate {
    type: ActionTypes.ADD_ACTIVE_RATE;
    payload: string;
}

interface RemoveActiveRate {
    type: ActionTypes.REMOVE_ACTIVE_RATE;
    payload: string;
}

interface SetInitialRates {
    type: ActionTypes.SET_INITIAL_RATES;
    payload: Array<any>
}

interface SetAllRatesAsActive {
    type: ActionTypes.SET_ALL_RATES_AS_ACTIVE;
}

interface ResetAllActiveRates {
    type: ActionTypes.RESET_ALL_ACTIVE_RATES;
}

export type CurrFilterAction =
    AddActiveRate
| RemoveActiveRate
| SetInitialRates
| SetAllRatesAsActive
| ResetAllActiveRates;