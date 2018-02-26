const queries = require ('../db/queries')
const knex = require('../db/knex')
const bodyParser = require ('body-parser')

getAllInspections = (req, res) => {
    queries.getAllInspections()
    .then(inspections => { //the promise takes the parameter inspections which is the table name already populated with data from database
        res.json(inspections)
    })
}

getOneInspection = (req, res) => {
    queries.getOneInspection(req.params.id)
    .then(inspections => {
        res.json(inspections)
    })
}

postNewInspections = (req,res) => {
    queries.createInspection(req.body)
    .then(inspections => { //the promise takes the parameter inspections which is the table name already populated with data from database
        res.json(inspections[0])
    })
}

updateInspections = (req,res) => {
    let updateInspection = req.body
    res.json('Entry number ' + updateInspection.id + ' updated')
}

deleteInspections = (req,res) => {
    let deleteInspection = req.params
    res.json('Entry number ' + deleteInspection.id + ' deleted')
}

module.exports = {
    getAllInspections,
    getOneInspection,
    postNewInspections,
    updateInspections,
    deleteInspections
};