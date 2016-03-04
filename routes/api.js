var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
function Posts() {
  return knex('readit_posts');
}
function Comments() {
  return knex('readit_comments');
}
router.post('/', function(req, res, next) {
  delete req.body.comments;
  delete req.body.numOfComments;
  delete req.body.index;
  delete req.body.toggler;
  delete req.body.singlePlural
  console.log('here at expres route');
  Posts().insert(req.body).then(function (response) {
    console.log("total success check yo db");
  })
});

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
