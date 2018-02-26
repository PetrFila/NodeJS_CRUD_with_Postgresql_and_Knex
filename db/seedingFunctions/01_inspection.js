const inspection = require('../seedingFiles/inspectionsSeeds')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('inspections').del()
    .then(function () {
      // Inserts seed entries
      return knex('inspections').insert(inspection);
    });
};
