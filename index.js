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
  }
  $scope.upVote = function (post) {
    post.votes = post.votes + 1
    var votenum = document.getElementById('vote_color'+post.index);
    console.log(post.index);
    if (post.votes === 0) {
      votenum.style.color = "black";
    }else if (post.votes > 0) {
      votenum.style.color = "green";
    }
  }
  $scope.downVote = function (post) {
    post.votes = post.votes - 1
    var votenum = document.getElementById('vote_color'+post.index);
    console.log(post.votes);
    if (post.votes === 0) {
      votenum.style.color = "black";
    }else if (post.votes < 0) {
      votenum.style.color = "red";
    }
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
    form.commentToggler = false;
    form.singlePlural = "No Comments to Show"
    $scope.forms.push(form);
    $scope.title = null;
    $scope.author = null;
    $scope.img_url = null;
    $scope.description = null;
  }
//when submiting a new comment the post it button from any post takes the
//value of the last post comment.
  $scope.submitCommentForm= function (post) {
    var newComment = {}
    post.numOfComments += 1;
    console.log(post.numOfComments);
    console.log(post.index);
    var comment = (document).getElementById('cFormComment'+post.index).value
    var author = (document).getElementById('cFormAuthor'+post.index).value
    console.log(comment, author);
    newComment.commentAuthor = author
    newComment.comment = comment
    post.comments.push(newComment)
    singlePlural(post)
    // console.log(post.comments);
    comment.value = null;
    author.value  = null;
  }

  singlePlural = function (post) {
    if (post.comments.length === 1) {
      post.singlePlural = "Show "+post.numOfComments+" Comment"
      } else {
      post.singlePlural = "Show "+post.numOfComments+" Comments"
      }
    }
})
