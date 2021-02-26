import {IRatesObject} from "../types/services/currencyServiceTypes";

const axios = require("axios");

class CurrencyService {

    private activeCurrency: string;
    private exchangeCurrency: string;
    private baseURL: string;

    constructor() {
        this.activeCurrency = 'USD';
        this.exchangeCurrency = 'EUR';
        this.baseURL = `https://api.exchangeratesapi.io/latest?base=${this.activeCurrency}`;
    }

    async getAllRatesByCurrency(currency=this.activeCurrency) {
        try{
            const {data} = await axios.get(this.baseURL);
            return {...data, rates: this.mapRatesToArray(data.rates)}
        } catch (e) {
            throw new Error(e)
        }
    }

    async getCurrencyRatio(activeCurrency: string, exchangeCurrency: string) {
        try {
            const url = this.baseURL + `&symbols=${exchangeCurrency}`
            const {data} = await axios.get(url);
            const ratio: number = data.rates[exchangeCurrency]
            return ratio
        } catch (e) {
            throw new Error(e)
        }
    }

    mapRatesToArray(ratesObj: IRatesObject) {
        const ratesArr: Array<string> = Object.keys(ratesObj);
        return ratesArr.map(r => ({name: r, ratio: ratesObj[r]}))
    }
}

export default CurrencyService