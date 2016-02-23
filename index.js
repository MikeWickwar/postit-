var app = angular.module('mike', ['angularMoment', 'ngMessages', 'ui.bootstrap', 'ngAnimate']);

app.controller('MyController', function ($scope) {
  $scope.forms = [];
  $scope.showMe = false
  $scope.showComment = false
  $scope.showFormComment = false
  $scope.upvotes = 0;
  $scope.downvotes = 0;
  $scope.sorter = {value :'-votes',
                   title : 'Votes'};
  var vm = this;
  vm.time = new Date()
  $scope.index = 0;

  $scope.voteColor = function (post) {
    var votenum = document.getElementById('vote_color'+post.index);
    if (post.votes === 0) {
      votenum.style.color = "black";
    }else if (post.votes > 0) {
      votenum.style.color = "green";
    }else if (post.votes < 0) {
      votenum.style.color = "red"
    }
  }
  $scope.toggleShow = function () {
    $scope.showMe = !$scope.showMe
  }
  $scope.showComment = function (post) {
    post.commentToggler = true;
  }
  $scope.toggleCommentShow = function (post) {
    post.commentToggler = !post.commentToggler
  }
  $scope.toggleCommentFormShow = function (post) {
    post.toggler = !post.toggler
    console.log('here');
  }
  $scope.upVote = function (post) {
    post.votes = post.votes + 1
    voteColor(post);
  }
  $scope.downVote = function (post) {
    post.votes = post.votes - 1
    voteColor(post);
  }
  $scope.sortby = function (value) {
    $scope.sorter = value;
  }

  $scope.submitForm= function () {
    var form = {}
    form.title = $scope.title;
    form.author = $scope.author;
    form.img_url = $scope.img_url;
    form.description = $scope.description;
    form.votes = 0;
    form.comments = [];
    form.numOfComments = 0;
    form.time = new Date()
    form.index = $scope.index++;
    form.toggler = false;
    form.singlePlural = "No Comments to Show"
    $scope.forms.push(form);
    $scope.toggleShow();
    $scope.title = null;
    $scope.author = null;
    $scope.img_url = null;
    $scope.description = null;
  }
  $scope.submitCommentForm= function (post) {
    var newComment = {}
    post.numOfComments += 1;
    var comment = (document).getElementById('cFormComment'+post.index)
    var author = (document).getElementById('cFormAuthor'+post.index)
    newComment.commentAuthor = author.value
    newComment.comment = comment.value
    post.comments.push(newComment)
    singlePlural(post)
    $scope.toggleCommentFormShow(post)
    author.value = null;
    comment.value = null ;

  }

  singlePlural = function (post) {
    if (post.comments.length === 1) {
      post.singlePlural = "Show "+post.numOfComments+" Comment"
      } else {
      post.singlePlural = "Show "+post.numOfComments+" Comments"
      }
    }
})
