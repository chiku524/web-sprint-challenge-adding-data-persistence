
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: "Training kit!!", description: "resort to the TK for any assistance"},
        {name: "TL", description: "follow the 20 minute rule and ask TL for guidance"},
        {name: "The world wide web!", description: "Feel free to use online resources you are capable of finding on the web!"}
      ]);
    });
};
