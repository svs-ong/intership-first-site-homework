async function getElementFromFile(filePath, elementId) {
    try {
        // Use Fetch API to get the element content
        const response = await fetch(filePath); // Fetch the file
        const elementAsString = await response.text(); // Convert response to text

        // Parse the elementAsString into a Document Object Model (DOM)
        const parser = new DOMParser(); // Create a new DOMParser instance
        const parsedElement = parser.parseFromString(
            elementAsString,
            "text/html"
        ); // Parse the string to a HTML document

        // Return the element with the specified ID
        return parsedElement.getElementById(elementId);
    } catch (error) {
        console.error(`Failed to load element from file: ${filePath}`, error);
        return null; // Return null in case of an error
    }
}

async function fetch_articles() {
    try {
        const response = await fetch("http://localhost:3000/articles");
        articleList = await response.json();
        return articleList;
    } catch (error) {
        console.error("Error fetching data", error);
        return [];
    }
}
function injectCss(cssFilePath) {
    // Create a link element for the CSS file
    let linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = cssFilePath;

    // Append the link element to the head
    document.head.appendChild(linkElement);
}

async function main() {
    const articles = await fetch_articles();
    const card_template = await getElementFromFile("./card.html", "card");
    for (let article of articles) {
        const card = card_template.cloneNode(true);
        card.querySelector("#title").innerText = article.title;
        card.querySelector("#description").innerText = article.description;
        document.body.appendChild(card);
    }
    injectCss("./card.styles.css");
}

document.addEventListener("DOMContentLoaded", main);
