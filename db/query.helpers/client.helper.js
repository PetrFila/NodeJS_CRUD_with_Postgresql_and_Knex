//this is a query file to be used for CRUDing against the database

const knex = require('../knex') //requiring connection from the knex.js


//this module contains queries to manipulate the database
module.exports = {
  getAllClients() {
    return knex('clients');
  },
  getOneClient(id) {
    // return knex.raw('select * from clients inner join inspections')
    return knex('clients').where('id', id).first(); //.first only returns one row
  },
  postNewClient(client) {
    return knex('clients').insert(client,'*');
  },
  updateClient(req) {
    return knex('clients').where('id',req.params.id).update(req.body,'*')
  }
}
