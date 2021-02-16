import React, {useEffect, useState} from 'react';
import s from './styles.module.scss'
import CurrencyService from "../../services/currencyService";
import {useDispatch, useSelector} from "react-redux";
import PassiveSelectWidget from "./PassiveInput";
import ActiveSelectWidget from "./ActiveInput";
import {setActiveInputIdAction, setActiveInputValueAction} from "../../redux/inputsReducer";
import {setActiveCurrencyAction} from "../../redux/currencyReducer";
import {addSelectsValueAction} from "../../redux/selectsReducer";


const CurrencyDashboard = () => {
    const dispatch = useDispatch();

    const currenciesRates = useSelector(({currency}) => currency.allRates)
    const storeActiveId = useSelector(({inputs}) => inputs.activeInputID);
    const activeValue = useSelector(({inputs}) => inputs.activeInputValue);
    const activeCurrency = useSelector(({currency}) => currency.activeCurrency);
    const selectsValues = useSelector(({selects}) => selects.selectsValues);

    const widgetProps = {
        activeValue,
        selectsValues,
        rates: currenciesRates,
        dispatchers: {
            setSelectElementValue(currentSelect){
                dispatch(addSelectsValueAction(currentSelect))
            }
        }
    }

    const activeWidgetProps = {
        ...widgetProps,
        dispatchers: {
            ...widgetProps.dispatchers,

            setInputValue(value){
                dispatch(setActiveInputValueAction(value))
            },
            setActiveCurrency(value){
                dispatch(setActiveCurrencyAction(value))
            },
        }
    }


    const passiveWidgetProps = {
        ...widgetProps,
        activeCurrency,
        dispatchers: {
            ...widgetProps.dispatchers,

            setCurrentWidgetAsActive(inputID, inputValue, selectValue){
                dispatch(setActiveInputIdAction(inputID))
                dispatch(setActiveInputValueAction(inputValue))
                dispatch(setActiveCurrencyAction(selectValue))
            },

        }
    }


    return (
        <div className={s.currenciesBlock}>
            {new Array(10).fill(null).map((_,i) => {
                const inputID = `${i+1}`;

                return storeActiveId == inputID

                    ?

                    <ActiveSelectWidget
                        key={i}
                        inputID={inputID}
                        properties={activeWidgetProps}
                    />

                    :

                    <PassiveSelectWidget
                        key={i}
                        inputID={inputID}
                        properties={passiveWidgetProps}
                    />


            })}
        </div>
    );
};

export default CurrencyDashboard;