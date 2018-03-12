const client = require('../seedingFiles/clientsSeeds')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert(client);
    });
};
