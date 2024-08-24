
import React from "react";
import '../styles/Article.styles.css';

interface ArticleProps
{
    "imgurl":string;
    "title":string;
    "description":string;
    "author":string;
    "rating": string;
    "timeToRead":string;
    "date":string;
}

export const Article:React.FC<ArticleProps>=({
    title,
    description,
    date,
    imgurl,
    author,
    timeToRead,
    rating
    })=> {
    return (
        <div className="article">
            <div className="article-content">
            <img src={imgurl}alt="No image availabe"></img>
            <h2>{title}</h2>
            <p>{description}</p>
            </div>
            <div className="article-footer">
                <div className="article-author">
                <p>Written by: <q>{author}</q></p>
                </div>
                <div className="article-date">
                <p>{date}</p>
                </div>
                <div className="article-date">
                <p>{rating}</p>
                </div>
                <div className="article-ttr">
                <p>{timeToRead}</p>
                </div>
            </div>
        </div>
    );
}
