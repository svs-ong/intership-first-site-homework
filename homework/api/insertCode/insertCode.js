async function getTextFromFile(filePath) {
    try {
      const response = await fetch(filePath);
      if(!response.ok)
      {
        throw new Error(`Something went wrong... : ${response.status}`)
      }
      const text=await response.text(); /// converts response to text
      return text; //returns the code
    } catch (error) {
      console.error(`Failed to load element from file: ${filePath}`, error);
      return null;
    }
  }

async function insertHTML(copyLocation, pasteLocation) {
    const HTMLcode  = await getTextFromFile(copyLocation);
    if(HTMLcode)
    {
      const codeLocation = document.getElementById(pasteLocation);
      if(codeLocation)
          codeLocation.insertAdjacentHTML('beforeend',HTMLcode);
      else console.error("Element with id '${pasteLocation}' not found!");
        
    }
}

async function insertCSS(copyLocation,pasteLocation)
{
  const CSScode = await getTextFromFile(copyLocation);
  if(CSScode)  
    {
      const styleElement = document.createElement("style");
      styleElement.innerText=CSScode;
      document.head.appendChild(  styleElement  );
    }
} 