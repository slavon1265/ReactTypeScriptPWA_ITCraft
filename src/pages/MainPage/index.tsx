import React, {useContext, useEffect} from 'react'
import s from './styles.module.scss'
import CurrencyDashboard from "../../components/CurrencyDashboard";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCurrenciesRates, fetchInitialCurrenciesRatesForFilters} from "../../redux/asyncActions/currencies";
import Header from "../../components/Header";
import CurrencyController from "../../components/CurrencyController";
import {Box, Grid} from "@material-ui/core";
import NewsDashboard from "../../components/NewsDashboard";
import {fetchArticlesByActiveCurrency} from "../../redux/asyncActions/articles";
import LiveCurrencyRates from "../../components/LiveCurrencyRates";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export default function MainPage() {
    const dispatch = useDispatch()
    const activeRate = useTypedSelector(({currency}) => currency.activeCurrency);
    const articles = useTypedSelector(({articles}) => articles.articles);
    const activeCurrencies = useTypedSelector(({currencyFilters}) => currencyFilters.activeRates)

    useEffect(() => {
        dispatch(fetchAllCurrenciesRates());
        dispatch(fetchInitialCurrenciesRatesForFilters());
    }, []);

    useEffect(() => {
        if (!!activeRate) {
            dispatch(fetchArticlesByActiveCurrency(activeRate));
        }
    }, [activeRate])

    return (
        <Box className={s.mainPage}>
            <header>
                <Header />
            </header>
            <Box flexGrow={1} p={1} style={{background:"#f6f6ff"}}>
                <Grid container spacing={2} direction={"column"} >
                    <Grid item>
                        <CurrencyController />
                    </Grid>
                    <Grid item container justify={'space-around'} >
                            <Grid item xs={12} sm={3} md={2}>
                                <CurrencyDashboard />
                            </Grid>
                            <Grid item xs={12} sm={5} md={7} >
                                <NewsDashboard articles={articles} activeRate={activeRate}/>
                            </Grid>
                            <Grid item xs={12} sm={4} md={2}>
                                <LiveCurrencyRates activeCurrencies={activeCurrencies} activeRate={activeRate}/>
                            </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
