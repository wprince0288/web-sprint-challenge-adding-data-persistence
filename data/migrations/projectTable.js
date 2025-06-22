exports.up = function(knex) {
    return knex.schema.createTable('projects', (table) => {
      table.increments('project_id');  
      table.string('project_name').notNullable();
      table.string('project_description');
      table.boolean('project_completed').defaultTo(false);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
  };