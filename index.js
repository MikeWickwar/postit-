var app = angular.module('mike', []);

app.controller('MyController', function ($scope) {

  $scope.forms = [];
  $scope.showMe = false
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
    $scope.forms.push(form);

    console.log($scope.forms);
  }
})
