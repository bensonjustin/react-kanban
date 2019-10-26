exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cards')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cards').insert([
        {
          title: 'title1',
          body: 'rowValue1',
          priority_id: 1,
          status_id: 1,
          created_by: 1,
          assigned_to: 1
        },
        {
          title: 'title2',
          body: 'rowValue2',
          priority_id: 2,
          status_id: 2,
          created_by: 2,
          assigned_to: 2
        },
        {
          title: 'title3',
          body: 'rowValue3',
          priority_id: 3,
          status_id: 3,
          created_by: 3,
          assigned_to: 3
        }
      ]);
    });
};
