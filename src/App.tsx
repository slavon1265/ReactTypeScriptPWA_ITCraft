import React from 'react';
import MainPage from './pages/MainPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/rootReducer";
import {Provider, useDispatch} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {fetchCurrenciesRatio} from "./redux/asyncActions/currencies";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

(()=>{

})()

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                     <Switch>
                        <Route path="/" component={MainPage}/>
                     </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
