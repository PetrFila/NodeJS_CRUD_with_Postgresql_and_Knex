const employee = require('../seedingFiles/employeesSeeds')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert(employee);
    });
};
