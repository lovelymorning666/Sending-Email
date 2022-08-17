exports.up = function (knex) {
  return knex.schema.createTable('todos', table => {
    table.increments('t_id');
    table.integer('u_id').unsigned().references('users.u_id');
    table.string('title').notNullable();
    table.boolean('is_completed').notNullable().defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
 return  knex.schema.dropTable('todos');
};
