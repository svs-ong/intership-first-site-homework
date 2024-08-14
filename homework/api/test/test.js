import { fetch_articles } from '../fetch_articles.js';

document.addEventListener("DOMContentLoaded", main);
 
async  function main()
{
    let articles=await fetch_articles();
    const articlesContainer = document.getElementById("articles-container");
    for(let article of articles)
    {
        let div=createDiv(article);
        articlesContainer.appendChild(div);
    }
}

function createDiv(article)
{
        const articleDiv = document.createElement("div"); // creates a new div

        articleDiv.classList.add("article"); // adds the class name "article " to the created div

        const titleElement = document.createElement("h2"); // creates a <h2> element

        titleElement.innerText=article.title; // appends the article.title  inside the h2

        articleDiv.appendChild(titleElement); // appends the title to the div

        return articleDiv; //returns the div to be later appended in the main function
}