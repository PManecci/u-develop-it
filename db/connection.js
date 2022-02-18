const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection(
    {
        host: '127.0.0.1', 
        // Your MySQL username,
        user: 'root', 
        // Your MySQL password
        password: 'pmanecci',
        database: 'election',
        port: 3306
    },
    console.log('Connected to the election database')
);

module.exports = db;