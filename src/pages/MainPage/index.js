import React, {useEffect} from 'react'
import s from './styles.module.scss'
import CurrencyDashboard from "../../components/CurrencyDashboard";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCurrenciesRates, fetchCurrenciesRatio} from "../../redux/asyncActions/currencies";

export default function MainPage() {

    const allRates = useSelector(state => state.allRates);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllCurrenciesRates())
    }, [])

    return (
        <div>
            <header><h1 className={s.title}>Main Page</h1></header>
            <main>
                <CurrencyDashboard />
            </main>
        </div>
    )
}
