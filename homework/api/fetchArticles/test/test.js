import { fetch_articles } from "../fetch_articles.js";

//This will call the main function everytime the page is reloaded.
document.addEventListener("DOMContentLoaded", main);

async function main() {
  let articles = await fetch_articles(); //gets the list of articles
  console.log(articles); //displays the articles in console
  const articlesContainer = document.getElementById("articles-container"); //gets a reference to the div with "articles-container" id.
  // for each article, creates an element and inserts it into the article container.
  for (let article of articles) {
    let div = createDiv(article);
    articlesContainer.appendChild(div);
  }
}

/* gets the title from the article and creates and element that looks like this:
<div class="article">
  <h2>{article.title}</h2>
</div>
*/

function createDiv(article) {
  const articleDiv = document.createElement("div"); // creates a new div

  articleDiv.classList.add("article"); // adds the class name "article " to the created div

  const titleElement = document.createElement("h2"); // creates a <h2> element

  titleElement.innerText = article.title; // appends the article.title  inside the h2

  articleDiv.appendChild(titleElement); // appends the title to the div

  return articleDiv; //returns the div to be later appended in the main function
}
