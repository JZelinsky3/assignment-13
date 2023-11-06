const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
const fs = require("fs");

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/data", (req, res) => {
  // Read data from album.json file
  fs.readFile("album.json", (err, data) => {
      if (err) {
          console.error("Error reading data:", err);
          res.status(500).send("Internal Server Error");
          return;
      }
      const albumData = JSON.parse(data);
      res.json(albumData);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});