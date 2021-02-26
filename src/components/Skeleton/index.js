import React from 'react';
import s from './style.module.scss'

const Skeleton = ({content}) => {
    return (
        <div className={s.wrapper}>
            <span>{content}</span>
        </div>
    );
};

export default Skeleton;