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

connection.connect(function (err) {
    if (err) {
        console.error('Cannot connect to database: ' + err.stack);
        return;
    }

    console.log('Connected. ID: ');
});

let menu = async () => {

    const menu = await inquirer.prompt(
        [{
            type: 'list',
            message: 'Select an option:',
            name: 'choice',
            choices: [
                'View Employees',
                'View Departments',
                'View Roles',
                'Add Employee',
                'Remove Employee',
                'Change Employee Role',
                'Change Employee Manager',
                'Add Department',
                'Add Role',
            ]
        }]);

    switch (menu.choice) {
        case 'View Employees':
            viewEmployees();
            break;
        case 'View Departments':
            viewEmployees();
            break;
        case 'View Roles':
            viewEmployees();
            break;
        case 'Add Employee':
            viewEmployees();
            break;
        case 'Remove Employee':
            viewEmployees();
            break;
        case 'Change Employee Role':
            viewEmployees();
            break;
        case 'Change Employee Manager':
            viewEmployees();
            break;
        case 'Add Department':
            viewEmployees();
            break;
        case 'Add Role':
            viewEmployees();
            break;
    }

}

let viewEmployees = () => {

}