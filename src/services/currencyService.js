const axios = require("axios");

class CurrencyService {
    constructor() {
        this.baseURL = `https://api.exchangeratesapi.io`;
    }

    async getAllRatesByCurrency(currency) {
        try{
            const url = this.baseURL + `/latest?base=${currency}`
            const {data} = await axios.get(url);
            return {...data, rates: this.mapRatesToArray(data.rates)}
        } catch (e) {
            throw new Error(e)
        }
    }

    async getCurrencyRatio(activeCurrency, exchangeCurrency) {
        try {
            const url = this.baseURL + `/latest?base=${activeCurrency}&symbols=${exchangeCurrency}`
            const {data} = await axios.get(url);
            const ratio = data.rates[exchangeCurrency]
            return ratio
        } catch (e) {
            throw new Error(e)
        }
    }

    mapRatesToArray(ratesObj) {
        return Object.keys(ratesObj).map(ratio => ({name: ratio, ratio: ratesObj[ratio]}))
    }
}

export default CurrencyService