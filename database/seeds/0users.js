exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: 'name1', last_name: 'last1', email: 'email1' },
        { first_name: 'name2', last_name: 'last2', email: 'email2' },
        { first_name: 'name3', last_name: 'last3', email: 'email3' }
      ]);
    });
};
