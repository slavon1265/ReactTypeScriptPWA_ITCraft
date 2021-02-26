import React, {useEffect, useState} from 'react';
import CurrencyService from "../../../services/currencyService.ts";
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

    const inputFocusHandler = ({target}) => {
        const parsedNumber = parseStrToNum(target.value);
        console.log('parsedNumber on Input Event:', parsedNumber)
        setInputValue(parsedNumber);
    }

    const inputChangeHandler = ({target}) => {
        setInputValue(target.value)
    }

    const selectChangeHandler = ({target}) => {
        setSelectValue(target.value);
        setSelectElementValue({[inputID]:target.value})
    }

    const inputBlurHandler = () => {
        const inputValueChanged = (activeValue * ratio).toFixed(2) != inputValue;

        // console.log(`
        //     activeValue=${activeValue}\n
        //     ratio=${ratio}\n
        //     activeValue * ratio=${(activeValue * ratio).toFixed(2)}\n
        //     inputValue=${inputValue}\n
        //     parseStrToNum(inputValue)=${parseStrToNum(inputValue)}`)
        //
        // console.log(inputValueChanged)

        if (inputValueChanged) {
            setCurrentWidgetAsActive(inputID, inputValue, selectValue)
        }
    }

    useEffect(async () => {
        try{
            const ratio = await currencyService.getCurrencyRatio(activeCurrency, selectValue);
            setCurrentInputValueByRatio(ratio, activeValue)
        } catch (e) {
            console.error(e)
        }

    }, [selectValue, activeCurrency]);

    useEffect(() => {
        setCurrentInputValueByRatio(ratio, activeValue)
    }, [activeValue])

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
                    inputBlurHandler,
                    inputFocusHandler
                },
            }
        }
        />

    );
};

export default PassiveSelectWidget;