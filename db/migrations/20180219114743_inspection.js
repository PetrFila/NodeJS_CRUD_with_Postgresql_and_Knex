
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('inspections', (inspect) => {
    inspect.increments();
    inspect.date('date');
    inspect.integer('frequency');
    inspect.text('auditor');
    inspect.text('comments');
  })
  .createTable('clients', (client) => {
    client.increments();
    client.text('name');
    client.text('address');
    client.text('contact_number');
    client.text('email');
    client.text('contact_person');
    client.integer('inspect_id').references('id').inTable('inspections').notNull().onDelete('cascade');
  });

};

exports.down = function(knex, Promise) {
  // Reverse order here to prevent error.
  return knex.schema
  .dropTable('clients')
  .dropTable('inspections')
};
