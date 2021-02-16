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

    const inputChangeHandler = (e) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);
    }

    const selectChangeHandler = (e) => {
        const selectValue = e.target.value;
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