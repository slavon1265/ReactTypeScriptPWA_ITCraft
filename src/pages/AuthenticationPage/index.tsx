import React, {useCallback, useContext, useState} from 'react';
import Header from "../../components/Header";
import s from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {Context} from "../../index";
import { AuthService } from './../../services/authService';
import AuthBlock from '../../components/AuthBlock';
import SignInSideForm from "../../components/SignInSideComponent";
import {setAuthType} from "../../redux/authReducer";

const authService = new AuthService();

const AuthenticationPage = () => {
    // @ts-ignore
    const authType = useSelector(({auth}) => auth.authType);
    // @ts-ignore
    const { auth } = useContext(Context);
    const dispatch = useDispatch();

    const dispatchAuthType = (payload: string): void => {
        dispatch( setAuthType(payload) );
    }

    const [authFormVisible, setAuthFormVisible] = useState(false);


    // @ts-ignore
    return (
        <div className={s.authPage}>
            <Header />
            <AuthBlock
                authType={authType}
                authService={authService}
                authFormVisible={authFormVisible}
                setAuthFormVisible={setAuthFormVisible}
                authState={auth}
            />
            <SignInSideForm authType={authType} signIn={authService.signUpWithEmail} isVisible={authFormVisible} setAuthType={dispatchAuthType}/>
        </div>
    );
};

export default AuthenticationPage;