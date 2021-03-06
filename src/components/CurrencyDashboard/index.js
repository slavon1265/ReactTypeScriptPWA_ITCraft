import React, {useEffect, useState} from 'react';
import s from './styles.module.scss'
import CurrencyService from "../../services/currencyService";
import {useDispatch, useSelector} from "react-redux";
import PassiveSelectWidget from "./PassiveInput";
import ActiveSelectWidget from "./ActiveInput";


const CurrencyDashboard = () => {
    const currenciesRates = useSelector(({currency}) => currency.allRates)
    const storeActiveId = useSelector(({inputs}) => inputs.activeInputID);
    const activeValue = useSelector(({inputs}) => inputs.activeInputValue);
    const activeCurrency = useSelector(({currency}) => currency.activeCurrency);


    // const [activeId, setActiveId] = useState(storeActiveId);



    useEffect(() => {
        console.log('store  inputs Id changed')
    }, [storeActiveId])

    return (
        <div className={s.currenciesBlock}>
            {new Array(4).fill(null).map((_,i) => {
                const inputID = `${i+1}`;

                return storeActiveId == inputID

                    ?

                    <ActiveSelectWidget
                        key={i}
                        rates={currenciesRates}
                        inputID={inputID}
                    />

                    :

                    <PassiveSelectWidget
                        key={i}
                        rates={currenciesRates}
                        inputID={inputID}
                        activeValue={activeValue}
                        activeCurrency={activeCurrency}
                    />


            })}
        </div>
    );
};

export default CurrencyDashboard;