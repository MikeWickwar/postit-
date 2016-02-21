var app = angular.module('mike', ['angularMoment', 'ngMessages', 'ui.bootstrap']);

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
    form.time = new Date()
    form.index = $scope.index++;
    form.toggler = false;
    form.commentToggler = false;
    $scope.forms.push(form);
    $scope.title = null;
    $scope.author = null;
    $scope.img_url = null;
    $scope.description = null;
  }

  $scope.submitCommentForm= function (post) {
    var newComment = {}
    newComment.commentAuthor = $scope.main.newCommentForm.commentAuthor.$viewValue;
    newComment.comment = $scope.main.newCommentForm.comment.$viewValue;
    post.comments.push(newComment)
    // $scope.main.newCommentForm.comment.$rawModelValue = null;
    // $scope.main.newCommentForm.commentAuthor.$rawModelValue = null;
  }
})
