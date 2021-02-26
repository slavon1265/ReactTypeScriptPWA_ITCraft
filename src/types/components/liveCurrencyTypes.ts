
interface ILiveIdsDbValue{
    [key: string]: string;
}

export interface ILiveIdsDb {
    [key: string]: ILiveIdsDbValue;
}

export interface IActiveCurrencies {
    [key: string]: any;
}

interface IActiveRate {
    [key: string]: any;
}

export interface ILiveCurrencyPropsTypes {
    activeCurrencies: Array<string>;
    activeRate: string;

}