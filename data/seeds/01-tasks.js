
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: 'Ask your employee for data to put into website', notes: 'we will need pictures and content', completed: true},
        {project_id: 2, description: "fork, clone repo and get to work!!", notes: "use sarahMarie's guideline notes on all the installs", completed: true},
      ]);
    });
};
