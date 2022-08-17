
export function up(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('u_id');
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

export function down(knex) {
  return knex.schema.dropTable('users')
};
