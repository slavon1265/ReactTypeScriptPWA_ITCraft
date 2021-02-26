import React, { useContext, useState } from 'react';
import Header from "../../components/Header";
import s from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {Context} from "../../index";
import { AuthService } from '../../services/authService';
import AuthBlock from '../../components/AuthBlock';
import SignInSideForm from "../../components/SignInSideComponent";
import {setAuthType} from "../../redux/authReducer";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const authService = new AuthService();

const AuthenticationPage: React.FC = () => {
    const authType: string = useTypedSelector(({auth}) => auth.authType);
    const { auth } = useContext(Context);
    const dispatch = useDispatch();

    const dispatchAuthType = (payload: string): void => {
        dispatch( setAuthType(payload) );
    }

    const [authFormVisible, setAuthFormVisible] = useState<boolean>(false);

    return (
        <div className={s.authPage}>
            <Header />
            <AuthBlock
                authType={authType}
                authService={authService}
                setAuthFormVisible={setAuthFormVisible}
                authState={auth}
            />
            <SignInSideForm authType={authType} authService={authService} isVisible={authFormVisible} setAuthType={dispatchAuthType}/>
        </div>
    );
};

export default AuthenticationPage;