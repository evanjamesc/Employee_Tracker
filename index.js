const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
// This line was added by VS Code when I created 'connection', not sure what it is:
//const { connect } = require('http2');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Radar9518',
    database: 'employees_db'
});

connection.connect(function(err)
{
    if (err) {
        console.error('Cannot connect to database: ' + err.stack);
        return;
    }

    console.log('Connected. ID: ');
});