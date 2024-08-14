import { fetch_articles } from '../../../api/fetch_articles.js';

document.addEventListener("DOMContentLoaded", main);

async function main() {
    console.log('Main function executed');
    try {
        const articlesContainer = document.getElementById("articles-container"); //Get the article container element
        const templateSource = document.getElementById("article-template").innerHTML; //Get the template source
        const template = Handlebars.compile(templateSource);//Compile the Handlebars template
        const articles = await fetch_articles();
        const articleIndex = 1; // Change this to the index of the article you want to render
        const article = articles[articleIndex];
        const html = template(article);
        articlesContainer.innerHTML = html;
    } catch (error) {
        console.error('Error rendering article:', error);
    }
}