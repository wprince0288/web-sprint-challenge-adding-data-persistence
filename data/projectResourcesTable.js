exports.up = function(knex) {
    return knex.schema.createTable('project_resources', table => {
      table.increments('id'); 
      table.integer('project_id').unsigned().notNullable();
      table.integer('resource_id').unsigned().notNullable();
      table.foreign('project_id').references('projects.project_id');
      table.foreign('resource_id').references('resources.resource_id');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources');
  };