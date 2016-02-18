var app = angular.module('mike', []);

app.controller('MyController', function ($scope) {

  $scope.contractors = [];
  $scope.showMe = false
  $scope.toggleShow = function () {
    $scope.showMe = !$scope.showMe
  }

  $scope.getContractor = function () {
    var contractor = {}
    contractor.name = $scope.name;
    contractor.rate = $scope.rate;
    $scope.contractors.push(contractor);
    if ($scope.contractors.length > 0) {
      $scope.buttontitle = "Add another contractor"
    }
    if ($scope.contractors.length > 2) {
      $scope.buttontitle = "Really!?"
    }
    console.log($scope.contractors.length);
    console.log('I have recieved '+$scope.name+' and '+$scope.rate);
    console.log($scope.contractors);
  }
})
