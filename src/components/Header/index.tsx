import React, {useContext} from 'react';
import {Box} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from 'react-router-dom';
import {AUTH_ROUTE} from "../../utils/consts";
import {useDispatch, useSelector} from "react-redux";
import {setAuthType} from "../../redux/authReducer";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 0,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

// @ts-ignore
const Header = () => {

    // @ts-ignore
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    const classes = useStyles();

    const dispatch = useDispatch();

    // @ts-ignore
    const authType: string = useSelector(({auth}) => auth.authType);

    const btnClickHandler = (btnValue: string) => {

        if (btnValue === 'signIn') {
            dispatch(setAuthType('signIn'))
        } else if (btnValue === 'signUp') {
            dispatch(setAuthType('signUp'))
        }

    }



    // @ts-ignore
    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Currency Exchange App
                    </Typography>
                    <Box>
                        {user ?
                            (
                                    <Button onClick={() => auth.signOut()} color="inherit">Logout</Button>
                            )
                            :
                            (
                                <>
                                    <NavLink to={AUTH_ROUTE}>
                                        <Button color={authType ==='signIn' ? 'secondary' : 'inherit'} value="signIn" onClick={() => btnClickHandler('signIn')}>Sign-In</Button>
                                    </NavLink>
                                    <NavLink to={AUTH_ROUTE}>
                                        <Button color={authType ==='signUp' ? 'secondary' : 'inherit'} value="signUp" onClick={() => btnClickHandler('signUp')}>Sign-Up</Button>
                                    </NavLink>
                                </>
                            )
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
