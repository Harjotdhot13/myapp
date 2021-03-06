'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', ['myApp.controllers', 'myApp.services', 'ngRoute']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/drivers", {
    templateUrl: "partials/drivers.html",
    controller: "driversController"
  }).
  when("/drivers/:id", {
    templateUrl: "partials/driver.html",
    controller: "driverController"
  }).
  otherwise({
    redirectTo: '/drivers'
  });
}]);