import React, {useState} from 'react';
import SelectInputComponent from "../SelectInputComponent";

const ActiveCurrencyInput = ({inputID, properties, initialSelectValue}) => {
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

    const [selectValue, setSelectValue] = useState(selectsValues[inputID] || initialSelectValue);

    const inputChangeHandler = (e) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);
    }

    const selectChangeHandler = (e) => {
        const selectValue = e.target.value;
        setSelectValue(selectValue);
        setActiveCurrency(selectValue);
        setSelectElementValue({[inputID]:e.target.value})
    }

    return (
            <SelectInputComponent properties = {
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
    )
};

export default ActiveCurrencyInput;