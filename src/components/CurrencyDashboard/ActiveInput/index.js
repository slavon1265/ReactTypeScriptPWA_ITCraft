import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setActiveInputValueAction} from "../../../redux/inputsReducer";
import {setActiveCurrencyAction} from "../../../redux/currencyReducer";
import {addSelectsValueAction} from "../../../redux/selectsReducer";

const ActiveCurrencyInput = ({rates, inputID}) => {
    const dispatch = useDispatch();
    const activeValue = useSelector(({inputs}) => inputs.activeInputValue);
    const activeCurrency = useSelector(({currency}) => currency.activeCurrency);
    const activeID = useSelector(({inputs}) => inputs.activeInputID)
    const selectsValues = useSelector(({selects}) => selects.selectsValues)

    const [selectValue, setSelectValue] = useState(selectsValues[inputID] || 'USD');


    const inputChangeHandler = ({target}) => {
        dispatch(setActiveInputValueAction(target.value))
    }

    const selectChangeHandler = ({target}) => {
        setSelectValue(target.value)
        dispatch(setActiveCurrencyAction(target.value))
    }

    useEffect(() => {
            console.log('main component did unmount with' + selectValue)
            dispatch(addSelectsValueAction({[inputID]:selectValue}))

    }, [selectValue])


    return (
            <div style={{'background': 'red'}}>
                <select name="" id="" value={selectValue} onChange={selectChangeHandler}>
                    {rates.map((curr, i) => {
                        return <option key={i} value={curr.name}>{curr.name}</option>
                    })}
                </select>
                <input type={'number'}
                       onChange={inputChangeHandler}
                       value={activeValue}
                />
            </div>
    );
};

export default ActiveCurrencyInput;