import React, {useEffect, useState} from 'react';
import CurrencyService from "../../../services/currencyService";
import {parseNumToStr, parseStrToNum} from "../../../utils/functions";
import SelectInputComponent from "../SelectInputComponent";

const currencyService = new CurrencyService();

const PassiveSelectWidget = ({inputID, properties, initialSelectValue}) => {

    const {
        rates,
        activeValue,
        activeCurrency,
        selectsValues,
        dispatchers: {
            setCurrentWidgetAsActive,
            setSelectElementValue
        }
    } = properties;

    const [selectValue, setSelectValue] = useState(selectsValues[inputID] || initialSelectValue);
    const [ratio, setRatio] = useState(1);
    const [inputValue, setInputValue] = useState(activeValue * ratio);


    const setCurrentInputValueByRatio = (ratio, activeValue) => {
        const parsedStr = parseNumToStr(activeValue * ratio);

        setRatio(ratio);
        setInputValue(parsedStr)
    }

    //-------------HANDLERS

    const inputChangeHandler = ({target}) => {
        const parsedNumber = parseStrToNum(target.value)
        setInputValue(parsedNumber);
    }

    const selectChangeHandler = ({target}) => {
        setSelectValue(target.value);
        setSelectElementValue({[inputID]:target.value})
    }

    const inputBlurHandler = () => {
        const inputValueChanged = activeValue * ratio !== parseStrToNum(inputValue);

        if (inputValueChanged) {
            setCurrentWidgetAsActive(inputID, inputValue, selectValue)
        }
    }

    useEffect(async () => {
        try{
            const ratio = await currencyService.getCurrencyRatio(activeCurrency, selectValue);
            setCurrentInputValueByRatio(ratio, activeValue)
        } catch (e) {
        }

    }, [selectValue, activeCurrency]);

    useEffect(() => {
        setCurrentInputValueByRatio(ratio, activeValue)
    }, [activeValue])

    // useEffect(() => {
    //     if (!!selectValue) {
    //     }
    // }, [selectValue])

    return (
        <SelectInputComponent properties = {
            {
                selectValue,
                rates,
                inputValue,
                activeValue,
                ratio,
                isActive: false,
                handlers: {
                    selectChangeHandler,
                    inputChangeHandler,
                    inputBlurHandler
                },
            }
        }
        />

    );
};

export default PassiveSelectWidget;