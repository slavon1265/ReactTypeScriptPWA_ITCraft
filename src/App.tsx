import React, {useContext, useEffect} from 'react';
import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom';
import {applyMiddleware, createStore} from "redux";
import { rootReducer } from "./redux/rootReducer"
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import AppRouter from "./components/AppRouter";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function App(): JSX.Element {
    // @ts-ignore
    const {auth} = useContext(Context);
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return (
            <div className={"appContainer"}>
                <Loader />
            </div>
        )
    }

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                     <AppRouter />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
