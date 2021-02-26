import {ArticlesAction, ArticlesTypes, IArticles} from "../types/reducers/articlesTypes";

const initialState: IArticles = {
    articles: []
}

export default (state= initialState, action: ArticlesAction) => {
    switch (action.type) {
        case ArticlesTypes.SET_ARTICLES_BY_ACTIVE_CURRENCY:
            return {...state, articles: action.payload}
        default :
            return state
    }
}

export const setArticlesByActiveCurrency = (payload: Array<any>): ArticlesAction => ({type: ArticlesTypes.SET_ARTICLES_BY_ACTIVE_CURRENCY, payload})