const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'db.sqlite';
const jsonData = require('../data/example.json');

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');

    db.run(`CREATE TABLE search (
                    id INTEGER PRIMARY KEY,
                    title TEXT NOT NULL,
                    url TEXT NOT NUll
                )`, // @TODO #2 create table in database
    (err) => {
      if (err) {
        // Table already created
        console.error(err);
      } else {
        // Table was created, let's add some data here.

        // @TODO #2 insert some query data into database
        const insert = `INSERT INTO search (id, title, url)
VALUES (?, ?, ?)`;// INSERT INTO ...
        db.run(insert, [6, 'Gather', 'https://gather.town']);

        // @TODO #4 loop through JSON file and insert every object into the database
        for (let i = 0; i < jsonData.length; i++) {
          db.run(insert, [jsonData[i].id, jsonData[i].title, jsonData[i].url]);
        }
        /* jsonData.forEach(obj => {
                        db.run(insert, [obj.id, obj.title, obj.url]);
                    }); */
      }
    });
  }
});

module.exports = db;
