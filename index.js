var app = angular.module('mike', ['angularMoment']);

app.controller('MyController', function ($scope) {
  $scope.forms = [];
  $scope.showMe = false
  $scope.upvotes = 0;
  $scope.downvotes = 0;
  $scope.sorter = '-votes.up';
  var vm = this;
  vm.time = new Date()

  $scope.toggleShow = function () {
    $scope.showMe = !$scope.showMe
    console.log($scope.soter);
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
      up : $scope.upvotes,
      down : $scope.downvotes
    }
    form.time = new Date()

    $scope.forms.push(form);

    console.log($scope.forms);
  }
})
