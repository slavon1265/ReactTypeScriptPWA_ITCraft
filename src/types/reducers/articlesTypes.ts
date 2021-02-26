export interface IArticles {
    articles: Array<any>
}

export enum ArticlesTypes {
    SET_ARTICLES_BY_ACTIVE_CURRENCY= 'SET_ARTICLES_BY_ACTIVE_CURRENCY'
}

interface ISetArticlesByCurrencyAction {
    type: ArticlesTypes.SET_ARTICLES_BY_ACTIVE_CURRENCY;
    payload: Array<any>;
}

export type ArticlesAction = ISetArticlesByCurrencyAction;