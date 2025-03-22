export async function fetch_articles() {
    console.log("Fetching articles...");
    let arr=[];
    try {
        const response = await fetch('http://localhost:3000/articles');
        arr = await response.json();
        console.log("Data fetched successfully");
        return arr;
    } catch (error) {
        console.error("Error fetching data", error);
        return [];
    }
}