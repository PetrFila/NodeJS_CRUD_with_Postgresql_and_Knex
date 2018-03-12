
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('articles', (article) => {
        article.increments();
        article.text('title');
        article.text('shortText');
        article.text('longText');
        article.text('image');
        article.text('categoryId');
        article.timestamp('createdAt').defaultTo(knex.fn.now());
        article.timestamp('updatedAt').defaultTo(knex.fn.now());
        article.timestamp('published_at').defaultTo(knex.fn.now())
        article.boolean('published');
        article.text('author');
        article.text('displayOrder');
        article.text('publishedAt');
        article.text('docReference');
        article.text('discoveryContent');
      })

};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('articles')

};
