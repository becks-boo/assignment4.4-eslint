const express = require('express')
const app = express()
const Twig = require("twig")
const db = require('./src/Database.js')

const port = 3000
app.use(express.static('public'))
app.set('view engine', 'twig')


app.get('/test', (req, res) => {
    res.render('test.twig', {name: "Jane Doe"})
})

app.get('/search', (req, res) => {
    // @TODO #1 copy code from Assignment 4.2
})

app.post('/search', (req, res) => {
    // @TODO #3 implement search in SQLite database
    db.all(`SELECT ...`, [], (err, rows) => {
        //...
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
