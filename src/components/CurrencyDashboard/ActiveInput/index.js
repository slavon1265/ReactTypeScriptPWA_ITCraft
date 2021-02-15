import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setActiveInputValueAction} from "../../../redux/inputsReducer";
import {setActiveCurrencyAction} from "../../../redux/currencyReducer";
import {addSelectsValueAction} from "../../../redux/selectsReducer";
import {MenuItem, Select, TextField} from "@material-ui/core";

const ActiveCurrencyInput = ({rates, inputID}) => {
    const dispatch = useDispatch();
    const activeValue = useSelector(({inputs}) => inputs.activeInputValue);
    const selectsValues = useSelector(({selects}) => selects.selectsValues);

    const [selectValue, setSelectValue] = useState(selectsValues[inputID] || 'USD');


    const inputChangeHandler = ({target}) => {
        dispatch(setActiveInputValueAction(target.value))
    }

    const selectChangeHandler = ({target}) => {
        setSelectValue(target.value)
        dispatch(setActiveCurrencyAction(target.value))
    }

    useEffect(() => {
            dispatch(addSelectsValueAction({[inputID]:selectValue}))
    }, [selectValue])


    return (
            <div>
                <Select name="" id="" value={selectValue} onChange={selectChangeHandler}>
                    {rates.map((curr, i) => {
                        return <MenuItem key={i} value={curr.name}>{curr.name}</MenuItem>
                    })}
                </Select>
                <TextField type={'number'}
                       onChange={inputChangeHandler}
                       value={activeValue}
                />
            </div>
    );
};

export default ActiveCurrencyInput;