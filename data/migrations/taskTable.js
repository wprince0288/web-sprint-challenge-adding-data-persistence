exports.up = function(knex) {
    return knex.schema.createTable('tasks', table => {
      table.increments('task_id');  
      table.string('task_description').notNullable();
      table.string('task_notes');
      table.boolean('task_completed').defaultTo(false);
      table.integer('project_id').unsigned().notNullable();
      table.foreign('project_id').references('projects.project_id');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
  };