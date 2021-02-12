const axios = require("axios");

class CurrencyService {
    constructor() {
        this.activeCurrency = 'USD';
        this.exchangeCurrency = 'EUR';
        this.baseURL = `https://api.exchangeratesapi.io/latest?base=${this.activeCurrency}`;
    }

    async getAllRatesByCurrency(currency=this.activeCurrency) {
        this.setCurrencies(currency);
        const {data} = await axios.get(this.baseURL);
        return {...data, rates: this.mapRatesToArray(data.rates)}
    }

    async getCurrencyRatio(activeCurrency, exchangeCurrency) {
        this.setCurrencies(activeCurrency, exchangeCurrency);
        const url = this.baseURL + `&symbols=${exchangeCurrency}`
        const {data} = await axios.get(url);
        const ratio = data.rates[exchangeCurrency]
        return ratio
    }

    setCurrencies(active, exchange=this.exchangeCurrency){
        this.activeCurrency = active;
        this.exchangeCurrency = exchange;
        this.baseURL = `https://api.exchangeratesapi.io/latest?base=${this.activeCurrency}`;
    }

    mapRatesToArray(ratesObj) {
        return Object.keys(ratesObj).map(ratio => ({name: ratio, ratio: ratesObj[ratio]}))
    }
}

export default CurrencyService