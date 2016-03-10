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
  Posts().insert(req.body).returning('id').then(function (post) {
    console.log(post, "doin it");
    res.json(post)
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

router.post('/posts/:id', function(req, res, next) {
  console.log('madeit');
  console.log(req.params.id);
  Posts().where('id', req.params.id).del().then(function () {
    res.json('success');
  })
});

module.exports = router;
