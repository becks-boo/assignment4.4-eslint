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
    res.render("/search", require("./routes/search_routes"));
})

app.post('/search', (req, res) => {
    // @TODO #3 implement search in SQLite database
    db.all(`SELECT 
                id, 
                title, 
                url 
            FROM search`, [id, title, url], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            // I DON'T KNOW WHAT TO DO HERE
            let searchQuery = rows;
        }
    })
})

app.all('*', (req, res) => {
    res.status(400).send("<h1>404 Page Not Found</h1>");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
