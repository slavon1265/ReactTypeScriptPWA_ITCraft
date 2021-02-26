import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'
import {IContext} from "./types/ContextType";
// import reportWebVitals from './reportWebVitals';


// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyB_S9XSyY00o_B8L1I_pVvlZHzpt17U2yc",
    authDomain: "curerncy-exchange-service.firebaseapp.com",
    projectId: "curerncy-exchange-service",
    storageBucket: "curerncy-exchange-service.appspot.com",
    messagingSenderId: "225993983402",
    appId: "1:225993983402:web:332a5105150ad85bc957d3",
    measurementId: "G-2L2P9C5861"
});


const auth = firebase.auth();

const initialContext: IContext = {auth, firebase}

export const Context = createContext(initialContext);





ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{
          firebase,
          auth
      }}>
          <App />
      </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
