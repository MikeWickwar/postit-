exports.up = function(knex, Promise) {
  return knex.schema.createTable('readit_comments', function(table) {
    table.increments('comment_id');
    table.integer('post_id');
    table.text('comment');
    table.string('comment_author');
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('readit_comments');
};
