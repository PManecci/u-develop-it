const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

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

db.query(`SELECT * FROM candidates`, (err, rows) => {
    if(err) throw err;
    console.table(rows);
});

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
