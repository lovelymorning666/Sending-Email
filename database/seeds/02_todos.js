
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {
          t_id: 1, 
          title: 'todo 1',
          u_id:1
        },
        {
          t_id: 2, 
          title: 'todo 2',
          u_id:1
        },
        {
          t_id: 3, 
          title: 'todo 3',
          u_id:2
        }
      ]);
    });
};
