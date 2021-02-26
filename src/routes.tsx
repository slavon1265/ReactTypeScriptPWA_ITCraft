import {AUTH_ROUTE, ERROR_ROUTE, MAIN_PAGE_ROUTE} from "./utils/consts";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import AuthenticationPage from "./pages/AuthenticationPage";
import {IRoute} from "./types/routesTypes";

export const publicRoutes: Array<IRoute> = [
    {
        path: AUTH_ROUTE,
        Component: AuthenticationPage
    }
]

export const privateRoutes: Array<IRoute> = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    },
    {
        path: ERROR_ROUTE,
        Component: ErrorPage
    }
]