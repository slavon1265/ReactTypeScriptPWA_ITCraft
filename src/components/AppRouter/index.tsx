import React, {useContext, useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../../routes";
import {AUTH_ROUTE, ERROR_ROUTE, LOGIN_ROUTE, MAIN_PAGE_ROUTE} from "../../utils/consts";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../../index";

const AppRouter = () => {
    // @ts-ignore
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    console.log(user)

    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to={MAIN_PAGE_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to={AUTH_ROUTE}/>
            </Switch>
        );
};

export default AppRouter;