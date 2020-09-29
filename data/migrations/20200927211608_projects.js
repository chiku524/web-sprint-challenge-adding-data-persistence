
exports.up = function(knex) {
    return knex.schema
        .createTable("projects", table => {
            table.increments('id');
            table.text("name").notNullable();
            table.text("description");
            table.bool("completed").defaultTo(false);
        })
        .createTable("resources", table => {
            table.increments('id');
            table.text("name").notNullable();
            table.text("description")
        })
        .createTable("tasks", table => {
            table.increments('id');
            table.text('description');
            table.text('notes');
            table.bool('completed').notNullable().defaultTo(false);
            table.integer("project_id").unsigned().notNullable().references("projects.id").onDelete("RESTRICT").onUpdate("CASCADE");
        })
        .createTable("project_resources", table => {
            table.integer("project_id").references("id").inTable('projects').unsigned().notNullable().onUpdate("CASCADE").onDelete("CASCADE");
            table.integer("resource_id").references('id').inTable('resources').unsigned().notNullable().onUpdate("CASCADE").onDelete("CASCADE");
            table.primary(['project_id', 'resource_id']);
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects');
};
