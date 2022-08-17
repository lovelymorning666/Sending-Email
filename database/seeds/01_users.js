
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {u_id: 1, name: 'basit', email:"basit@test.test"},
        {u_id: 2, name: 'jane', email:"jane@test.test"},
        {u_id: 3, name: 'zana', email:"zana@test.test"}
      ]);
    });
};
