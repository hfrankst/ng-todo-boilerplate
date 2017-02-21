"use strict";
//this app is like the main.js in IIFE projects, working like a switchboard or a file that runs config functions on page load
var app = angular.module("ToDoApp", ["ngRoute"])
.constant('FirebaseURL', "https://angular-code-along.firebaseio.com");

app.config(function ($routeProvider) {//config runs on page load, because that's just the nature of the config method
    $routeProvider.
    when('/items/list', {
        templateUrl: "partials/item-list.html",
        controller: 'ItemListCtrl'
    }).
    when('/items/new', {
        templateUrl: "partials/item-form.html",
        controller: 'ItemNewCtrl' 
    }).
    when('/items/details', {
        templateUrl: "partials/item-details.html",
        controller: 'ItemViewCtrl'
    }).
    otherwise('/items/list');
});
