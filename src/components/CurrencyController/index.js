import React, {useEffect, useState} from 'react';
import s from './styles.module.scss'
import {Box, Button, ButtonGroup, Chip, Paper} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import AddCurrenciesWrapper from "./AddCurrenciesWrapper";
import {
    addActiveRateAction,
    removeActiveRateAction,
    setAllRatesAsActiveAction
} from './../../redux/currenciesFilterReducer';
import {red} from "@material-ui/core/colors";

const CurrencyController = () => {
    const dispatch = useDispatch();

    const [modalIsVisible, setModalIsVisible] = useState(false);

    const setModalVisibility = state => {
        setModalIsVisible(state)
    }

    const activeRates = useSelector(({currencyFilters}) => currencyFilters.activeRates);
    const leftRates = useSelector(({currencyFilters}) => currencyFilters.leftRates);

    const chipHandleDelete = rate => {
        dispatch(removeActiveRateAction(rate))
    }

    const addActiveRate = rate => {
        dispatch(addActiveRateAction(rate))
    }

    const setAllRatesAsActive = () => {
        console.log('all must be as active!');
        dispatch(setAllRatesAsActiveAction());
        setModalIsVisible(false)
    }

    useEffect(() => {
        if (activeRates.length) {
            console.log('allRates', activeRates)
        }
    }, [activeRates])

    console.log(leftRates)

    return (
        <>
        <Paper elevation={3} className={s.filterBar}>
            <ButtonGroup>
                <Button variant="contained" color="primary" disabled={leftRates.length === 0 ? true : false} onClick={() => setModalVisibility(true)}>Add Currencies</Button>
                <Button variant="contained" color="secondary" disabled={activeRates.length <= 1 ? true : false} onClick={() => {}}>Reset</Button>
            </ButtonGroup>
            <Box className={s.chipContainer}>
                {activeRates.map((r, i) => {
                    return activeRates.length > 3 ?
                        <Chip
                            key={i}
                            label={r}
                            onDelete={() => chipHandleDelete(r)}
                            className={s.chip}
                        />
                        :
                        <Chip
                            key={i}
                            label={r}
                            className={s.chip}
                        />
                })}
            </Box>

            <AddCurrenciesWrapper
                isVisible={modalIsVisible}
                setIsVisible={isVisble => setModalVisibility(isVisble)}
                rates={leftRates}
                addActiveRate={addActiveRate}
                setAllRatesAsActive={setAllRatesAsActive}
            />
        </Paper>
        </>

    );
};

export default CurrencyController;