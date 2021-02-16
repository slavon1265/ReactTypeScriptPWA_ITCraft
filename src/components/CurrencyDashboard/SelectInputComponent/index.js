import React from 'react';
import s from "./styles.module.scss";
import {MenuItem, Select, TextField} from "@material-ui/core";
import {parseNumToStr} from "../../../utils/functions";
import classNames from "classnames";

const SelectInputComponent = ({properties}) => {
    const {
        selectValue,
        rates,
        inputValue,
        activeValue,
        ratio,
        isActive,
        handlers: {
            selectChangeHandler,
            inputChangeHandler,
            inputClickHandler,
            inputBlurHandler
        },
    } = properties;

    return (
        <div className={classNames(s.selectWidget, isActive && s.activeWidget )}>
            <Select name="" id="" value={selectValue} onChange={selectChangeHandler}>
                {
                    rates.map((r, i) => {
                        return <MenuItem key={i} value={r.name}>{r.name}</MenuItem>
                    })
                }
            </Select>
            {isActive ?
                <TextField
                    type={'text'}
                    onChange={inputChangeHandler}
                    value={activeValue}
                />
                :
                <TextField
                    type="text"
                    onChange={inputChangeHandler}
                    onClick={inputClickHandler}
                    value={inputValue || parseNumToStr((activeValue * ratio)) || 'Sorry this currency do not working=('}
                    onBlur={inputBlurHandler}
                />
            }
        </div>
    );
};

export default SelectInputComponent;