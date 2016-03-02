var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
function Posts() {
  return knex('readit_posts');
}
function Comments() {
  return knex('readit_comments');
}

router.get('/', function(req, res, next) {
  Comments().join('readit_posts', 'readit_comments.post_id', 'readit_posts.id').then(function (posts) {
    res.json(posts);
  })
});

module.exports = router;
