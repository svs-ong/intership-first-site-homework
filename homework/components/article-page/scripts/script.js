import { fetch_articles } from '../../../api/fetch_articles.js';

document.addEventListener("DOMContentLoaded", main);

async function main() {
    console.log('Main function executed');
    try {
        const articlesContainer = document.getElementById("articles-container"); //Get the article container from the html file
        const templateSource = document.getElementById("article-template").innerHTML; //Get the template source from the html file
        const template = Handlebars.compile(templateSource);
        const articles = await fetch_articles();
        const articleIndex = 2; // Change this to the index of the article you want to render
        const article = articles[articleIndex];
        const html = template(article);
        articlesContainer.innerHTML = html;
    } catch (error) {
        console.error('Error rendering article:', error);
    }
}