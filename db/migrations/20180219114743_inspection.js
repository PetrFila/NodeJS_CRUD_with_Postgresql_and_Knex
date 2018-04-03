
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('inspections', (inspection) => {
    inspection.increments('id').notNullable().primary();
    inspection.date('date');
    inspection.integer('frequency');
    inspection.text('auditor');
    inspection.text('comments');
    inspection.timestamp('createdAt').defaultTo(knex.fn.now());
    inspection.timestamp('updatedAt').defaultTo(knex.fn.now());
    
  })
};

exports.down = function(knex, Promise) {
  // Reverse order here to prevent error.
  return knex.schema
  .dropTable('inspections')
};
