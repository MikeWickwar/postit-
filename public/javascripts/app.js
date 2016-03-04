var app = angular.module('mike', ['angularMoment', 'ngMessages', 'ui.bootstrap', 'ngAnimate', 'ngRoute']);

 app.config(function($routeProvider, $locationProvider) {
     $routeProvider
       .when('/', {
         controller: "MyController",
         templateUrl: "./index.html"
       })
       .otherwise({
         template: '<div><h1>No Page Located Here</h1></div>'
       })
 });
