const express = require('express');
const app = express();
const db = require('./src/Database.js');

app.use(express.urlencoded());

const port = 3000;
app.use(express.static('public'));
app.set('view engine', 'twig');
// app.use("/search", require("./routes/search_routes"));

app.get('/test', (req, res) => {
  res.render('test.twig', {name: 'Jane Doe'});
});

app.get('/search', (req, res) => {
  // @TODO #1 copy code from Assignment 4.2
  res.render('search.twig');
});

app.post('/search', (req, res) => {
  // @TODO #3 implement search in SQLite database
  // Saves the user text input
  const searchInput = req.body.search;
  // Saves the user radio btn choice
  const radioBtnSelection = req.body.radioBtn;
  // Initialize empty string variable to change later depending on radioBtnSelection
  let columnChoice = '';

  // Example: SELECT * FROM search WHERE title LIKE "%Gather%"
  let searchQuery;

  if (radioBtnSelection === 'all-titles') {
    // If user selects radio btn "Show all titles"
    searchQuery = `SELECT * FROM search`;

    /* In this case a separate method is needed because this query is different than the others,
        no params */
    db.all(searchQuery, (err, rows) => {
      if (err) {
        console.log(err);
      }

      res.render('search.twig', {outputs: rows});
    });
    return;
  } else if (radioBtnSelection === 'filter-title') {
    // If user selects radio btn "Filter by title"
    columnChoice = 'title';
  } else if (radioBtnSelection === 'filter-url') {
    // If user selects radio btn "Filter by URL"
    columnChoice = 'url';
  } else {
    // If user selects radio btn "Filter by ID"
    columnChoice = 'id';
  }

  searchQuery = `SELECT * FROM search WHERE ${columnChoice} LIKE ?`;

  db.all(searchQuery, [`%${searchInput}%`], (err, rows) => {
    if (err) {
      console.log(err);
    }

    res.render('search.twig', {outputs: rows});
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/search`);
});

module.exports = app;
