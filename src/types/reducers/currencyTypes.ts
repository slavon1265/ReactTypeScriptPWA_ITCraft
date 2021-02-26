
export interface ICurrency {
    activeCurrency: string;
    allRates: Array<any>
}

export enum CurrencyTypes {
    SET_ACTIVE_CURRENCY='SET_ACTIVE_CURRENCY',
    SET_ALL_RATES='SET_ALL_RATES',
}

interface ISetActiveCurrency {
    type: CurrencyTypes.SET_ACTIVE_CURRENCY;
    payload: string;
}

interface ISetAllRates {
    type: CurrencyTypes.SET_ALL_RATES;
    payload: Array<any>;
}

export type CurrencyAction =
    ISetActiveCurrency
    | ISetAllRates;