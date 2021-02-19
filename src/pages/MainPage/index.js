import React, {useContext, useEffect} from 'react'
import s from './styles.module.scss'
import CurrencyDashboard from "../../components/CurrencyDashboard";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCurrenciesRates, fetchInitialCurrenciesRatesForFilters} from "../../redux/asyncActions/currencies";
import Header from "../../components/Header";
import CurrencyController from "../../components/CurrencyController";
import {Box, Grid} from "@material-ui/core";

export default function MainPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllCurrenciesRates())
        dispatch(fetchInitialCurrenciesRatesForFilters())
    }, [])

    return (
        <div className={s.mainPage}>
            <header>
                <Header />
            </header>
            <Box flexGrow={1} p={1} style={{background:"#f6f6ff"}}>
                <Grid container spacing={2} direction={"column"} >
                    <Grid item>
                        <CurrencyController />
                    </Grid>
                    <Grid item sm={2} style={{margin: "auto"}}>
                        <CurrencyDashboard />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
