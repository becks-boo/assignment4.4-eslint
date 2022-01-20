const express = require('express')
const app = express()
const Twig = require("twig")
const db = require('./src/Database.js')
const Search = require('./Search');

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
    const columnChoice = req.body.radioBtn;

    const searchQuery = `SELECT * FROM search WHERE ${columnChoice} LIKE ?`;

    db.all(searchQuery, [`%${searchInput}%`], (err, rows) => {
        if (err) {
            console.log(err);
        }

        res.render('search.twig', { outputs: rows });
    })
})

app.all('*', (req, res) => {
    res.status(400).send("<h1>404 Page Not Found</h1>");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
