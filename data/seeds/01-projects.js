
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'BuildingWebsite', description: 'This doesnt seem to be too bad!!', completed: true},
        {name: 'Sprint Challenge Time!', description: 'Hope I ace it!! (or get a 2 at the minimum)', completed: false},
        {name: 'Hello World!', description: 'This is very fun!', completed: true}
      ]);
    });
};
