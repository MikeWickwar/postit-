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
  Posts().fullOuterJoin('readit_comments', 'readit_posts.id', 'readit_comments.post_id').then(function (posts) {
    res.json(posts);
  })
});

module.exports = router;
