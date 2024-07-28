const database_file_name = 'db.json'
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static('public'));

app.get('/articles', (req, res) => {
    fs.readFile(database_file_name, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading data from file.');
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            const articles = jsonData.articles;
            res.setHeader('Content-Type', 'application/json');
            res.send(articles);
        } catch (parseError) {
            res.status(500).send('Error parsing JSON data.');
        }
    });
});

// Route to return a simple greeting message
app.get('/', (req, res) => {
    res.send('Hello, welcome to our article service!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});