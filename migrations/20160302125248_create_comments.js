exports.up = function(knex, Promise) {
  return knex.schema.createTable('readit_comments', function(table) {
    table.increments();
    table.integer('post_id');
    table.text('comment')
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('readit_comments');
};
