var app = angular.module('mike', []);

app.controller('MyController', function ($scope) {

  $scope.forms = [];
  $scope.showMe = false
  $scope.upvotes = 0;
  $scope.downvotes = 0;
  $scope.toggleShow = function () {
    $scope.showMe = !$scope.showMe
    console.log($scope.showMe);
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


    $scope.forms.push(form);

    console.log($scope.forms);
  }
})
