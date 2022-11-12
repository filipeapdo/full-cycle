const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
})

conn.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
    const sql = 'INSERT INTO people (name) VALUES ("Filipus");';
    conn.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted!")
    })
});

app.get('/', (req, res) => {
    res.send('<h1>Filipus\' here!</h1>')
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});
