const queries = require ('../db/query.helpers/client.helper.js')
const knex = require('../db/knex')
const bodyParser = require('body-parser')


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

postNewClient = (req,res) => {
    queries.postNewClient(req.body)
    .then(clients => { //the promise takes the parameter employees which is the table name already populated with data from database
        res.status(201).json(clients[0])
    })
    .catch(error => res.json({ error }))
}

updateClient = (req,res) => {
    queries.updateClient(req)
    .then(updatedClient => {
        res.status(201).json(updatedClient[0])
    })
    .catch(error => res.json({ error }))
}

deleteClient = (req,res) => {
    queries.deleteClient(req.params.id)
    .then(deletedClient => {
        res.status(201).json('Successfully deleted')
    })
    .catch(error => res.json({ error }))
}

module.exports = {
    getAllClients,
    getOneClient,
    postNewClient,
    updateClient,
    deleteClient
};