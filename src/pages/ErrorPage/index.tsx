import React from 'react';
import {Link} from "react-router-dom";
import {MAIN_PAGE_ROUTE} from "../../utils/consts";

const ErrorPage = () => {
    return (
        <div>
            <h1>404 Error page, sorry =(</h1>
            <h2 style={{color:'blue', cursor:'pointer'}}>
                <Link to={MAIN_PAGE_ROUTE} >
                     Return Home
                </Link>
            </h2>
        </div>
    );
};

export default ErrorPage;