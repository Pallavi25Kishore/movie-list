const express = require('express');
const movies = require('./model/index.js');
const app = express();
const PORT = 3000 || process.env.PORT;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json()); // to read body property for incoming req object eliminating need for chunking

app.get('/api/movies', (req, res) => {
  movies.getAll((err, movielist) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).json(movielist);
    }
  });
});

app.post('/api/movies', (req, res) => {
  var params = [req.body.title];
  movies.create(params, (err, result) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  });
});

app.patch('/api/movies/:id', (req, res) => {
  var params = [Number(req.params.id)]; // req.params object will contain key id and value "4" for eg.
  movies.update(params, (err, result) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});





app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})