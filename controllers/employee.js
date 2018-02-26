const queries = require ('../db/queries')
const knex = require('../db/knex')
const bodyParser = require('body-parser')
let allEmployees = [];

getAllEmployees = (req, res) => {
    queries.getAllEmployees()
    .then(employees => {
        res.json(employees)
    })
}

getOneEmployee = (req, res) => {
    queries.getOneEmployee(req.params.id)
    .then(employees => {
        res.json(employees)
    })
}

postNewEmployees = (req,res) => {
    allEmployees.push(req.body)
    res.json(allEmployees)
}

updateEmployees = (req,res) => {
    let updateEmployee = req.body
    res.json('Entry number ' + updateEmployee.id + ' updated')
}

deleteEmployees = (req,res) => {
    let deleteEmployee = req.params
    res.json('Entry number ' + deleteEmployee.id + ' deleted')
}

module.exports = {
    getAllEmployees,
    getOneEmployee,
    postNewEmployees,
    updateEmployees,
    deleteEmployees
};