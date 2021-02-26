import React, {useRef, useState} from 'react';
import s from './styles.module.scss'
import Loader from "../../Loader";
import Skeleton from "../../Skeleton";


const NewsItem = ({article, activeRate}) => {
    const {title, image, description, publishedAt, url, source: {name: sourceName, url: sourceURL}} = article;

    const [imgValid, setImgValid] = useState(false);

    const img = useRef();

    const imgIsValid = (img) => {
        let isValid = true;

        if (img.clientHeight < 50 || img.clientWidth < 50) {
            isValid = false;
        }
            return isValid
    }


    const publishDate = new Date(publishedAt);
    const publishTime = publishDate.toLocaleTimeString().split(':').slice(0,-1).join(':')


    return (
        <div className={s.newsItem}>

            <div className={s.newsItem__imgBlock}>
                { imgValid
                    ?
                    <img src={image} alt='' />
                    :
                    <Skeleton content={activeRate}/>
                }
            </div>

            <div className={s.newsItem__block}>
                <h4 className={s.newsItem__title}><a href={url} target="new_blank">{title}</a></h4>
                <div className={s.feedBlock}>
                    <a href={sourceURL} className={s.feedBlock__link} target="new_blank">{sourceName}</a>
                    <div className={s.feedBlock__publish}>
                        <span>published {publishDate.toLocaleDateString()} at {publishTime}</span>
                    </div>
                </div>
                <div>{description}</div>
            </div>


            <img ref={img}
                 tabIndex={0}
                 src={image} alt=''
                 onLoad={({target}) => setImgValid(imgIsValid(target))}
                 style={{position: "absolute", opacity:0, pointerEvents: 'none', maxWidth:"100px", maxHeight:"100px"}}/>
        </div>
    );
};

export default NewsItem;