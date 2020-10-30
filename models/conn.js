const host = "raja.db.elephantsql.com",
    user = "xmtiqhdv",
    database = "xmtiqhdv",
    password = "N9uCQXbL1wvC5WAev962JFZwQZhEZLTW";

const pgp = require('pg-promise')({
    query: function (e) {
        console.log('QUERY: ', e.query)
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password
}

const db = pgp(options)

module.exports = db;