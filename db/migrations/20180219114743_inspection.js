
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('inspections', (inspect) => {
    inspect.increments();
    inspect.date('date');
    inspect.integer('frequency');
    inspect.text('auditor');
    inspect.text('comments');
  })
  .createTable('employees', (employ) => {
    employ.increments();
    employ.integer('inspect_id').references('id').inTable('inspections').notNull().onDelete('cascade');
    employ.text('firstName');
    employ.text('lastName');
    employ.text('contact_number');
  });

};

exports.down = function(knex, Promise) {
  // Reverse order here to prevent error.
  return knex.schema
  .dropTable('employees')
  .dropTable('inspections')
};
