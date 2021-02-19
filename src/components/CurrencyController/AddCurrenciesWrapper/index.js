import React, {useState} from 'react';
import {Box, Chip, Grid} from "@material-ui/core";
import s from './styles.module.scss'
import Button from "@material-ui/core/Button";
import classNames from "classnames";

const AddCurrenciesWrapper = ({isVisible, setIsVisible, rates, addActiveRate, setAllRatesAsActive}) => {

    const parseRates = (ratesNamesArr) => {
        return ratesNamesArr.map(r => {
           return <Chip label={r} className={s.chipElement} onClick={({target}) => addActiveRate(target.innerText)} />
        })
    }

    return (
        <Box className={classNames(s.modalWrapper, !isVisible && s.hide)} onClick={e => { e.stopPropagation(); e.currentTarget === e.target && setIsVisible(false)}}>
            <Box className={s.modalBox}>
                <Grid container className={s.modalBox__gridContainer}>
                    <Grid item className={s.modalBox__chipContainer}>
                        {parseRates(rates.filter((r, i) => i%2 === 0))}
                    </Grid>
                    <Grid item className={s.modalBox__chipContainer}>
                        {parseRates(rates.filter((r, i) => i%2 === 1))}
                    </Grid>
                </Grid>

                <Button className={s.modalBox__submitBtn} variant="contained" color="primary" onClick={setAllRatesAsActive}>Add All</Button>
            </Box>
        </Box>
    );
};

export default AddCurrenciesWrapper;