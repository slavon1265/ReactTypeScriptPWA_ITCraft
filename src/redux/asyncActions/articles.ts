import ArticleService from "../../services/articleService";
import {setArticlesByActiveCurrency} from "../articlesReducer";
import {Dispatch} from "redux";

const as = new ArticleService();

export const fetchArticlesByActiveCurrency = (activeCurrency: string) => {
    return async (dispatch: Dispatch) => {
        const articles = await as.getNewsByCurrency(activeCurrency)
        return dispatch(setArticlesByActiveCurrency(articles))
    }
}