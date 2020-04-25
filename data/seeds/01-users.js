
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'name 1'},
        {name: 'name 2'},
        {name: 'name 3'}
      ]);
    });
};
