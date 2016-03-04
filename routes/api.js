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

router.post('/', function(req, res, next) {
  console.log('here at expres route');
});

router.get('/comments', function(req, res, next) {
  Comments().select().then(function (comments) {
    res.json(comments);
  })
});

module.exports = router;
