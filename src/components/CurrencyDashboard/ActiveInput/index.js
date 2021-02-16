import React, {useEffect, useRef, useState} from 'react';
import SelectInputComponent from "../SelectInputComponent";

const ActiveCurrencyInput = ({inputID, properties}) => {
    const {
        rates,
        activeValue,
        selectsValues,
        dispatchers: {
            setInputValue,
            setActiveCurrency,
            setSelectElementValue
        }
    } = properties

    const [selectValue, setSelectValue] = useState(selectsValues[inputID] || 'USD');

    const inputChangeHandler = ({ target: {value : inputValue} }) => { setInputValue(inputValue) };


    const selectChangeHandler = ({ target: {value: selectValue} }) => {
        setSelectValue(selectValue);
        setActiveCurrency(selectValue);
    }

    useEffect(() => {
        setSelectElementValue({[inputID]:selectValue})
    }, [selectValue])


    return (
            <SelectInputComponent properties ={
                {
                    selectValue,
                    rates,
                    activeValue,
                    isActive: true,
                    handlers: {
                        selectChangeHandler,
                        inputChangeHandler,
                    },
                }
            } />
    );
};

export default ActiveCurrencyInput;