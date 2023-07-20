import React, { useState } from 'react';
import "./newsCard.scss";
import { useEffect } from 'react';
import { Content } from '@radix-ui/react-dialog';


// Card Component
type NewsCardProps = {
    title?: string;
    content?: string;
    img?: string;
    // publishedAt?: string;
};


const NewsCard: React.FC<NewsCardProps> = (props: any) => {

    return (
        <div className="news-card">
            <img src={props.image} alt={props.title} className="news-card__image" />
            <h3 className="news-card__title">{props.title}</h3>
            <p className="news-card__description">{props.content}</p>
            {/* <span className="news-card__published">{publishedAt}</span> */}
        </div>
    );
};

// Main Page
export default function NewsSection(news: any) {
    // const [data] = useState([news]);
    useEffect(() => {
        console.log(news);
    }, [])
    return (
        <div id='News_Card'>
            <div id='Content'>
                <div id="left">
                    <img id='Image' src={news.image} alt="" />
                </div>
                <div id="right">
                    <h1 id='Title'>{news.title}</h1>
                    <button id='CTA'>Read More</button>
                </div>
            </div>
        </div>
    )
}