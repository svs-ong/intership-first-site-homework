const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;
const DB_PATH = path.join(__dirname, "db.json");

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Hello world route
app.get("/", (req, res) => {
  res.send("Use /data endpoint to retrieve data");
});

// GET endpoint to retrieve data from db.json
app.get("/articles", (req, res) => {
  fs.readFile(DB_PATH, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData.articles);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      res.status(500).json({ error: "Invalid JSON format" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
