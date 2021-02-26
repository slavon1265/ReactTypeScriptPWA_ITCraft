import React, {useEffect} from 'react';
import s from './styles.module.scss'
import {useDispatch} from "react-redux";
import PassiveSelectWidget from "./PassiveInput";
import ActiveSelectWidget from "./ActiveInput";
import {setActiveInputIdAction, setActiveInputValueAction} from "../../redux/inputsReducer";
import {setActiveCurrencyAction} from "../../redux/currencyReducer";
import {addSelectsValueAction} from "../../redux/selectsReducer";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ISelectPayload} from "../../types/reducers/selectsTypes";


const CurrencyDashboard: React.FC = () => {
    const dispatch = useDispatch();

    const currenciesRates = useTypedSelector(({currency}) => currency.allRates)
    const storeActiveId = useTypedSelector(({inputs}) => inputs.activeInputID);
    const activeValue = useTypedSelector(({inputs}) => inputs.activeInputValue);
    const activeCurrency = useTypedSelector(({currency}) => currency.activeCurrency);
    const selectsValues = useTypedSelector(({selects}) => selects.selectsValues);
    const activeRates = useTypedSelector(({currencyFilters}) => currencyFilters.activeRates)

    const widgetProps = {
        activeValue,
        selectsValues,
        rates: currenciesRates,
        dispatchers: {
            setSelectElementValue(currentSelect: ISelectPayload){
                dispatch(addSelectsValueAction(currentSelect))
            }
        }
    }

    const activeWidgetProps = {
        ...widgetProps,
        dispatchers: {
            ...widgetProps.dispatchers,

            setInputValue(value: string){
                dispatch(setActiveInputValueAction(value))
            },
            setActiveCurrency(value: string){
                dispatch(setActiveCurrencyAction(value))
            },
        }
    }


    const passiveWidgetProps = {
        ...widgetProps,
        activeCurrency,
        dispatchers: {
            ...widgetProps.dispatchers,

            setCurrentWidgetAsActive(inputID: string, inputValue:string, selectValue:string){
                dispatch(setActiveInputIdAction(inputID))
                dispatch(setActiveInputValueAction(inputValue))
                dispatch(setActiveCurrencyAction(selectValue))
            },

        }
    }

    useEffect(() => {
        console.log(activeRates)
    }, [activeRates])


    return (
        <div className={s.currenciesBlock}>
            {
                activeRates.map((rate,i) => {
                    const inputID = `${i+1}`;

                    return storeActiveId === inputID

                        ?

                        <ActiveSelectWidget
                            key={i}
                            inputID={inputID}
                            properties={activeWidgetProps}
                            initialSelectValue={rate}
                        />

                        :

                        <PassiveSelectWidget
                            key={i}
                            inputID={inputID}
                            properties={passiveWidgetProps}
                            initialSelectValue={rate}
                        />


                })
            }

        </div>
    );
};

export default CurrencyDashboard;