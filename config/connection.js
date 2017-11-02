// get the client
const mysql = require('mysql2');

// create the connection to database
const Connection = mysql.createConnection({
    host: 'dhurley.tk',
    user: 'rizse_burgers',
    database: 'rizse_burgers',
    password: "I=#T_JH.ZmCH"
});

module.exports = Connection;