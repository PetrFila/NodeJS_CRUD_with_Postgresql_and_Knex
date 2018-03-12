const queries = require ('../db/queries')
const knex = require('../db/knex')
const bodyParser = require('body-parser')
let allEmployees = [];

getAllClients = (req, res) => {
    queries.getAllClients()
    .then(clients => {
        res.json(clients)
    })
    .catch(error => res.json({ error }))
}

getOneClient = (req, res) => {
    queries.getOneClient(req.params.id)
    .then(clients => {
        res.status(201).json(clients)
    })
    .catch(error => res.json({ error }))
}

postNewClients = (req,res) => {
    queries.postNewClients(req.body)
    .then(clients => { //the promise takes the parameter employees which is the table name already populated with data from database
        res.status(201).json(clients[0])
    })
    .catch(error => res.json({ error }))
}

updateClients = (req,res) => {
    let updateClient = req.body
    res.status(201).json('Entry number ' + updateClient.id + ' updated')
}

deleteClients = (req,res) => {
    let deleteClient = req.params
    res.status(201).json('Entry number ' + deleteClient.id + ' deleted')
}

module.exports = {
    getAllClients,
    getOneClient,
    postNewClients,
    updateClients,
    deleteClients
};