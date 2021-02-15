import React, {useCallback, useContext, useState} from 'react';
import Header from "../../components/Header";
import s from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import classNames from 'classnames';
import googleIcon from '../../assets/icons/google_icon.svg'
import {Paper, Button, Typography, Icon} from '@material-ui/core';
import {Context} from "../../index";
import firebase from "firebase";



const AuthenticationPage = () => {
    // @ts-ignore
    const authType = useSelector(({auth}) => auth.authType);
    // @ts-ignore
    const { auth } = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const user = await auth.signInWithPopup(provider);
    }


    // @ts-ignore
    return (
        <div className={s.authPage}>
            <Header />
            <div className={s.authContainer}>
                {
                    authType === 'login' ?
                        (
                            <Paper className={classNames(s.authBox, s.loginBox)}>
                                <Typography className={classNames(s.authBox__title)}>Login Form</Typography>
                                <Button variant="outlined" color="secondary" onClick={login}>
                                    <img className={s.authBox__googleLogo} src={googleIcon} alt=""/>
                                    <span>Login with Google</span>
                                </Button>
                            </Paper>
                        )
                        :
                        (
                            <Paper className={classNames(s.authBox, s.loginBox)}>
                                <Typography className={classNames(s.authBox__title)}>SignIn Form</Typography>
                                <Button variant="outlined" color="secondary" onClick={login}>
                                    <img className={s.authBox__googleLogo} src={googleIcon} alt=""/>
                                    <span>Sign-In with Google</span>
                                </Button>
                            </Paper>
                        )
                }
            </div>
        </div>
    );
};

export default AuthenticationPage;