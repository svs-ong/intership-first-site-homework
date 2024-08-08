import { fetch_articles } from '../../fetch_articles.js';

document.addEventListener("DOMContentLoaded", main);

async function main() {
    console.log('Main function executed');
    try {
        const articlesContainer = document.getElementById("articles-container");
        const templateSource = document.getElementById("article-template").innerHTML;
        const template = Handlebars.compile(templateSource);
        const articles = await fetch_articles();
        const articleIndex = 0; // Change this to the index of the article you want to render
        const article = articles[articleIndex];
        const html = template(article);
        articlesContainer.innerHTML = html;
    } catch (error) {
        console.error('Error rendering article:', error);
    }
}