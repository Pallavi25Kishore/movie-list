const express = require('express');
const movies = require('./model/index.js');
const app = express();
const PORT = 3000 || process.env.PORT;
const path = require('path');

app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(express.json()); // to read body property for incoming req object eliminating need for chunking

app.get('/api/movies', (req, res) => {
  movies.getAll((err, movielist) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(201).json(movielist);
    }
  });
});





app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})