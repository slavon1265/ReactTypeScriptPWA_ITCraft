import React from 'react';
import s from './styles.module.scss'
import NewsItem from "./NewsItem";
import {Box} from "@material-ui/core";

const NewsDashboard = ({activeRate, articles}) => {


    return (
        <Box className={s.newsContainer} >
            <h2 className={s.newsContainer__title}>Latest news on the <span className={s.newsContainer__title__activeRate}>{activeRate}</span> exchange rate</h2>
            <div className={s.newsBlock}>
                {
                    articles.map((article, i) => {
                        return <NewsItem article={article} key={i} activeRate={activeRate}/>
                    })
                }
            </div>
        </Box>
    );
};

export default NewsDashboard;