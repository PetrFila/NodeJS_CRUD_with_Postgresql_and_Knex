//this is a query file to be used for CRUDing against the database

const knex = require('./knex') //requiring connection from the knex.js


//this module contains queries to manipulate the database
module.exports = {
  getAllInspections() {
    return knex('inspections'); //the parameter is the table name
  },
  getOneInspection(id) {
    return knex('inspections').where('id', id).first(); //.first only returns one row
  },
  createInspection(inspection) {
    return knex('inspections').insert(inspection)
  },
  getAllEmployees() {
    return knex('employees')
  },
  getOneEmployee(id) {
    return knex('employees').where('id', id).first(); //.first only returns one row
  },
}