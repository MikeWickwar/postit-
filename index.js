var app = angular.module('mike', ['angularMoment', 'ngMessages']);

app.controller('MyController', function ($scope) {
  $scope.forms = [];
  $scope.showMe = false
  $scope.showComment = false
  $scope.upvotes = 0;
  $scope.downvotes = 0;
  $scope.sorter = '-votes.up';
  var vm = this;
  vm.time = new Date()

  $scope.toggleShow = function () {
    $scope.showMe = !$scope.showMe
    console.log($scope.soter);
  }
  $scope.toggleCommentShow = function () {
    $scope.showComment = !$scope.showComment
  }
  $scope.upVote = function (post) {
    console.log('up');
    console.log(post.votes.up);
    post.votes.up = post.votes.up + 1
  }
  $scope.downVote = function (post) {
    console.log('down');
    console.log(post.votes.down);
    post.votes.down = post.votes.down + 1
  }

  $scope.submitForm= function () {
    var form = {}
    form.title = $scope.title;
    form.author = $scope.author;
    form.img_url = $scope.img_url;
    form.description = $scope.description;
    form.votes = {
      up : 0,
      down : 0
      }
    form.comments = [];
    form.time = new Date()

    $scope.forms.push(form);
  }

  $scope.submitCommentForm= function (post) {
    var newComment = {}
    newComment.commentAuthor = $scope.main.newCommentForm.commentAuthor.$viewValue;
    newComment.comment = $scope.main.newCommentForm.comment.$viewValue;
    post.comments.push(newComment)
    console.log(post);
  }
})
