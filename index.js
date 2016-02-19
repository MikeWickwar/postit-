var app = angular.module('mike', ['angularMoment', 'ngMessages', 'ui.bootstrap']);

app.controller('MyController', function ($scope) {
  $scope.forms = [];
  $scope.showMe = false
  $scope.showComment = false
  $scope.upvotes = 0;
  $scope.downvotes = 0;
  $scope.sorter = '-votes';
  var vm = this;
  vm.time = new Date()

  $scope.toggleShow = function () {
    $scope.showMe = !$scope.showMe
  }
  $scope.toggleCommentShow = function () {
    $scope.showComment = !$scope.showComment
  }
  $scope.upVote = function (post) {
    post.votes = post.votes + 1
  }
  $scope.downVote = function (post) {
    post.votes = post.votes - 1
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
    console.log($scope);
  }
})
