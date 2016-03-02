exports.up = function(knex, Promise) {
  return knex.schema.createTable('readit_posts', function(table) {
    table.increments('id');
    table.string('title');
    table.string('author');
    table.text('img_url');
    table.text('description');
    table.integer('votes')
    table.integer('number_of_comments')
    table.timestamp('created_at')
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('readit_posts');
};
