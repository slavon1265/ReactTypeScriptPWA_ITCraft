import axios from "axios";

export default class ArticleService {
    private readonly baseURL: string;
    private readonly apiKey: string | undefined;
    private readonly language: string;


    constructor() {
        this.baseURL = `https://gnews.io/api/v4/search`;
        this.apiKey = process.env.REACT_APP_GNEWS_API_KEY;
        this.language = 'en';
    }

    async getNewsByCurrency(currencyName: string) {
        const url = `${this.baseURL}?q=${currencyName}&lang=${this.language}&token=${this.apiKey}`;
        const { data: { articles } } = await axios.get(url);
        return articles
    }

}