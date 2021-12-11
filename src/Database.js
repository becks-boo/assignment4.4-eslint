var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE search (...)`, // @TODO #2 create table in database
            (err) => {
                if (err) {
                    // Table already created
                    console.error(err);
                } else {
                    // Table was created, let's add some data here.

                    // @TODO #2 insert some query data into database
                    let insert = ``;// INSERT INTO ...
                    db.run(insert, [])

                    // @TODO #4 loop through JSON file and insert every object into the database
                }
            });
    }
});

module.exports = db