import exec from 'child_process';
import fetch from 'node-fetch';

function startServer()
{
    exec('npm start', { cwd: './server' }, (error, stdout, stderr)=>
    {
        if(error)
        {
            console.error("Error starting the server : ${error.message}`");
            return ;
        }
        if(stderr)
        {
            console.error(`Server stderr: ${stderr}`);
            return ;
        }
        console.log(`Server started successfully:\n${stdout}`);
    });
}
async function fetchData() {
    try {
        const response= await fetch('http://localhost:3000/articles');
        const data= await response.json();
        console.log("Data fetched successfully", data);
    } catch (error) {
        console.error("Error fetching data", error);
    }
}
function CallFunctions()
{
    startServer();
    fetchData();
}
window.onload=CallFunctions();
modele.exports=defaultfetchData();