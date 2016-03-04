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
  Posts().select().then(function (posts) {
    res.json(posts);
  })
});

router.get('/comments', function(req, res, next) {
  Comments().select().then(function (comments) {
    res.json(comments);
  })
});

module.exports = router;
