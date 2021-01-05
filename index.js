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
                'EXIT'
            ]
        }]);

    switch (menu.choice) {
        case 'View Employees':
            viewEmployees();
            break;
        case 'View Departments':
            viewDepts();
            break;
        case 'View Roles':
            viewRoles();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        case 'Remove Employee':
            removeEmployee();
            break;
        case 'Change Employee Role':
            changeRole();
            break;
        case 'Change Employee Manager':
            changeManager();
            break;
        case 'Add Department':
            addDept();
            break;
        case 'Add Role':
            addRole();
            break;
        case 'Exit':
            exit();
            break;
        default:
            return;
    }

}

let viewEmployees = () => {

}

let viewDepts = () => {

}

let viewRoles = () => {

}

let addEmployee = () => {

}

let removeEmployee = () => {

}

let changeRole = () => {

}

let changeManager = () => {

}

let addDept = () => {

}

let addRole = () => {

}

let exit = () => {

}