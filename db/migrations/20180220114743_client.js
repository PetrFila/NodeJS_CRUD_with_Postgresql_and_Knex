
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('clients', (client) => {
      client.increments();
      client.text('name');
      client.text('address');
      client.text('contact_number');
      client.text('email');
      client.text('contact_person');
      client.integer('inspection_id').references('id').inTable('inspections').notNull().onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable('clients')
};
