const express = require('express')
const app = express()
const body_parser = require('body-parser')
const cors = require('cors');
app.use(cors());

// Conectamos la db
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'challenge-soho'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.set('port', 4300)
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json())


//// ROUTES
app.get('/api/projects', (req, res) => {
    const sql = `SELECT * FROM proyectos`;
    connection.query(sql, (error, results) => {
        if (error) return res.send(error);
        if (results.length > 0) return res.json(results);
        return res.json([])
    })
})

app.listen(4300, () => {
    console.log('Servidor corriendo en: http://localhost:4300');
});