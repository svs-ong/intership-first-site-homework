//! TODO: To remove
// function startServer()
// {
//     exec('npm start', { cwd: './server' }, (error, stdout, stderr)=>
//     {
//         if(error)
//         {
//             console.error("Error starting the server : ${error.message}`");
//             return ;
//         }
//         if(stderr)
//         {
//             console.error(`Server stderr: ${stderr}`);
//             return ;
//         }
//         console.log(`Server started successfully:\n${stdout}`);
//     });
// }


export async function fetch_articles() {
    console.log("Fetching articles...");
    try {
        const response = await fetch('http://localhost:3000/articles');
        const data = await response.json();
        console.log("Data fetched successfully");
        console.log( data);
    } catch (error) {
        console.error("Error fetching data", error);
    }
}