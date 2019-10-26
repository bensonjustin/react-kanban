exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('statuses')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('statuses').insert([
        { name: 'queue', rank: 1 },
        { name: 'in progress', rank: 2 },
        { name: 'done', rank: 3 }
      ]);
    });
};
