const article = require('../seedingFiles/articlesSeeds')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert(article);
    });
};