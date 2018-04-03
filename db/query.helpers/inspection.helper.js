//this is a query file to be used for CRUDing against the database

const knex = require('../knex') //requiring connection from the knex.js


//this module contains queries to manipulate the database
module.exports = {
  getAllInspections() {
    return knex('inspections'); //the parameter is the table name
  },
  getOneInspection(id) {
    // return knex.raw('select*from inspections inner join clients on inspections.client_id = clients.id where inspections.client_id = 2')
    return knex.from('inspections')
               .innerJoin('clients', 'inspections.id', 'clients.inspection_id')
               .where('clients.inspection_id', id)
               .select('inspections.id', 'inspections.auditor', 'clients.name', 'clients.address')
    // return knex('inspections').where('id', id).first(); //.first returns one row only
  },
  createInspection(inspection) {
    return knex('inspections').insert(inspection,'*')
  },
  updateInspection(req) {
    return knex('inspections').where('id',req.params.id).update(req.body,'*')
  },
  deleteInspection(id) {
    return knex('inspections').where('id', id).del()
  }
}
