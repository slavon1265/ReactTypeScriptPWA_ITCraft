import React from 'react';
import s from './styles.module.scss';

const Loader = () => {
    return (
        <div className={s.loaderBox}>
            <div className={s.loader}></div>
        </div>
    );
};

export default Loader;