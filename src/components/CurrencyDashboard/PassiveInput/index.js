import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setActiveInputIdAction, setActiveInputValueAction} from "../../../redux/inputsReducer";
import CurrencyService from "../../../services/currencyService";
import {setActiveCurrencyAction} from "../../../redux/currencyReducer";
import {addSelectsValueAction} from "../../../redux/selectsReducer";
import {MenuItem, Select, TextField} from "@material-ui/core";

const currencyService = new CurrencyService();

const PassiveSelectWidget = ({rates, inputID, activeCurrency, activeValue}) => {

    const dispatch = useDispatch();

    const selectsValues = useSelector(({selects}) => selects.selectsValues)
    const [selectValue, setSelectValue] = useState(selectsValues[inputID] || 'USD');
    const [ratio, setRatio] = useState(1);
    const [inputValue, setInputValue] = useState(activeValue * ratio);

    const inputChangeHandler = ({target}) => {
        setInputValue(target.value)
    }

    const selectChangeHandler = ({target}) => {
        setSelectValue(target.value);
    }

    const inputBlurHandler = () => {
        if (activeValue * ratio !== inputValue) {
            dispatch(setActiveInputIdAction(inputID))
            dispatch(setActiveInputValueAction(inputValue))
            dispatch(setActiveCurrencyAction(selectValue))
        }
    }

    const inputClickHandler = ({target}) => {

    }

    useEffect(async () => {
        try{
            const ratio = await currencyService.getCurrencyRatio(activeCurrency, selectValue);
            setRatio(ratio);
            setInputValue(activeValue * ratio)
        } catch (e) {

        }

    }, [selectValue, activeValue, activeCurrency])

    useEffect(() => {
        dispatch(addSelectsValueAction({[inputID]:selectValue}))
    }, [selectValue])

    return (
        <div>
            <Select name="" id="" value={selectValue} onChange={selectChangeHandler}>
                {
                    rates.map((r, i) => {
                        return <MenuItem key={i} value={r.name}>{r.name}</MenuItem>
                    })
                }
            </Select>
            <TextField
                type="text"
                onChange={inputChangeHandler}
                onClick={inputClickHandler}
                value={inputValue || (activeValue * ratio) || 'Sorry this currency do not working=('}
                onBlur={inputBlurHandler}
            />
        </div>
    );
};

export default PassiveSelectWidget;