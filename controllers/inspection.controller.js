const queries = require ('../db/query.helpers/inspection.helper.js')
const knex = require('../db/knex')
const bodyParser = require ('body-parser')

getAllInspections = (req, res) => {
    queries.getAllInspections()
    .then(inspections => { //the promise takes the parameter inspections which is the table name already populated with data from database
        res.json(inspections)
    })
    .catch(error => res.json({ error }))
}

getOneInspection = (req, res) => {
    queries.getOneInspection(req.params.id)
    .then(inspections => {
        res.json(inspections)
    })
    .catch(error => res.json({ error }))
}

postNewInspection = (req,res) => {
    queries.createInspection(req.body)
    .then(inspections => { //the promise takes the parameter inspections which is the table name already populated with data from database
        res.json(inspections[0])
    })
    .catch(error => res.json({ error }))
}

updateInspection = (req,res) => {
    queries.updateInspection(req)
    .then(updatedInspection => {
        res.status(201).json(updatedInspection[0])
    })
    
}

deleteInspection = (req,res) => {
    queries.deleteInspection(req.params.id)
    .then(deletedInspection => {
        res.status(201).json('Successfully deleted')
    })
    .catch(error => res.json({ error }))
}

module.exports = {
    getAllInspections,
    getOneInspection,
    postNewInspection,
    updateInspection,
    deleteInspection
};