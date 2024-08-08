async function getElementFromFile(filePath, elementId) {
    try {
      // Use Fetch API to get the element content
      // elementAsString is a string containing the HTML content of the element
      const elementAsString = await (await fetch(filePath)).text();
  
      // Parse the elementAsString into a Document Object Model (DOM)
      const parser = new DOMParser();
      const parsedElement = parser.parseFromString(elementAsString, "text/html");
  
      return parsedElement.getElementById(elementId);
    } catch (error) {
      console.error(`Failed to load element from file: ${filePath}`, error);
      return null;
    }
}

async function loadContent() {
    const header = await getElementFromFile('/components/header/header.html', 'header');
    const footer = await getElementFromFile('/components/footer.html', 'footer');

    document.getElementById('header').appendChild(header);
    document.getElementById('footer').appendChild(footer);
}

window.onload = loadContent;
