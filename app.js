const express = require('express')
const app = express()
const Twig = require("twig")
const db = require('./src/Database.js')
const Search = require('./Search');

app.use(express.urlencoded());

const port = 3000
app.use(express.static('public'))
app.set('view engine', 'twig')
// app.use("/search", require("./routes/search_routes"));

app.get('/test', (req, res) => {
    res.render('test.twig', {name: "Jane Doe"})
})

app.get('/search', (req, res) => {
    // @TODO #1 copy code from Assignment 4.2
    res.render("search.twig");
})

app.post('/search', (req, res) => {
    // @TODO #3 implement search in SQLite database
    // Saves the user text input
    const searchInput = req.body.search;
    // Saves the user radio btn choice
    const radioBtnSelection = req.body.radioBtn;
    // Initialize empty string variable to change later depending on radioBtnSelection
    let columnChoice = "";

    // Example: SELECT * FROM search WHERE title LIKE "%Gather%"
    let searchQuery;

    if (radioBtnSelection === "all-titles") {
        // If user selects radio btn "Show all titles"
        searchQuery = `SELECT * FROM search`;

        /* In this case a separate method is needed because this query is different than the others,
        no params */
        db.all(searchQuery, (err, rows) => {
            if (err) {
                console.log(err);
            }

            res.render('search.twig', { outputs: rows });
        });
    } else if (radioBtnSelection === "filter-title") {
        // If user selects radio btn "Filter by title"
        columnChoice = "title";
        searchQuery = `SELECT * FROM search WHERE ${columnChoice} LIKE ?`;
    } else if (radioBtnSelection === "filter-url") {
        // If user selects radio btn "Filter by URL"
        columnChoice = "url";
        searchQuery = `SELECT * FROM search WHERE ${columnChoice} LIKE ?`;
    } else {
        // If user selects radio btn "Filter by ID"
        columnChoice = "id";
        searchQuery = `SELECT * FROM search WHERE ${columnChoice} LIKE ?`;
    }


    db.all(searchQuery, [`%${searchInput}%`], (err, rows) => {
        if (err) {
            console.log(err);
        }

        res.render('search.twig', { outputs: rows });
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/search`)
})

module.exports = app;
