//This file sets the routes used to determine which partial is displayed for which url
var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/all.html',
      controller: 'newFriendController'
    })
    .when('/friends', {
      templateUrl: 'partials/new.html',
      controller: 'newFriendController'
    })
    .when('/friends/edit/:_id', {
      templateUrl: 'partials/edit.html',
      controller: 'editController'
    })
    .when('/friends/show/:_id', {
      templateUrl: 'partials/show.html',
      controller: 'showController'
    })
    .otherwise('/')
});
