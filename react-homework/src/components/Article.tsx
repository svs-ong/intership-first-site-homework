import React from "react";
interface ArticleProps
{
    "title":string;
    "description":string;
    "date":string;
}
export const Article:React.FC<ArticleProps>=({title,description,date})=>{
    return (
        <div className="Article">
            <h1>{title}</h1>
            <p>{description}</p>
            <br></br>
            <p>{date}</p>
        </div>
    );
}
