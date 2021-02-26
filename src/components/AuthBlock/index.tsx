import s from './styles.module.scss'
import classNames from 'classnames';
import googleIcon from '../../assets/icons/google_icon.svg'
import emailIcon from '../../assets/icons/email.svg'
import {Paper, Button, Typography} from '@material-ui/core';
import {IAuthBlockPropsTypes} from "../../types/components/authBlockTypes";

const AuthBlock = ({authType, authService, setAuthFormVisible, authState}: IAuthBlockPropsTypes)  => {
    return (
            <div className={s.authContainer} onClick={({currentTarget, target}) => currentTarget === target && setAuthFormVisible(false)}>
                {
                    authType === 'signIn' ?
                        (
                                <Paper className={classNames(s.authBox, s.loginBox)}>
                                    <Typography className={classNames(s.authBox__title)}>Sign-In Form</Typography>
                                    <Button className={s.authBox__btn} variant="outlined" color="primary" onClick={() => authService.loginWithGoogle(authState)}>
                                        <img className={s.authBox__logo} src={googleIcon} alt=""/>
                                        <span>Sign-In with Google</span>
                                    </Button>

                                    <Button className={s.authBox__btn} variant="outlined" color="primary" onClick={() => setAuthFormVisible((prev: boolean) => !prev)}>
                                        <img className={s.authBox__logo} src={emailIcon} alt=""/>
                                        <span>Sign-In with Email</span>
                                    </Button>
                                </Paper>
                        )
                        :
                        (
                                <Paper className={classNames(s.authBox, s.loginBox)}>
                                    <Typography className={classNames(s.authBox__title)}>Sign-Up Form</Typography>
                                    <Button className={s.authBox__btn} variant="outlined" color="primary" onClick={ () => authService.loginWithGoogle(authState) }>
                                        <img className={s.authBox__logo} src={googleIcon} alt=""/>
                                        <span>Sign-In with Google</span>
                                    </Button>

                                    <Button className={s.authBox__btn} variant="outlined" color="primary" onClick={ () => setAuthFormVisible((prev: boolean) => !prev) }>
                                        <img className={s.authBox__logo} src={emailIcon} alt=""/>
                                        <span>Sign-Up with Email</span>
                                    </Button>
                                </Paper>
                        )
                }
            </div>

    );
};

export default AuthBlock;