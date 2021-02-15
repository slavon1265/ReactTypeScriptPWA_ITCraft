import React, {useContext, useEffect} from 'react'
import s from './styles.module.scss'
import CurrencyDashboard from "../../components/CurrencyDashboard";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCurrenciesRates, fetchCurrenciesRatio} from "../../redux/asyncActions/currencies";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

export default function MainPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllCurrenciesRates())
    }, [])

    return (
        <div className={s.mainPage}>
            <header>
                <Header />
            </header>
            <main>
                <CurrencyDashboard />
            </main>
        </div>
    )
}
