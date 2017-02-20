"use strict";

app.controller("ToDoCtrl", function($scope){
    $scope.welcome = "hello";
    $scope.showListView = true;
    $scope.newTask = {};

 
    $scope.newItem = function () {
        console.log("you clicked on new item");
        $scope.showListView = false;
    };

    $scope.allItem = function () {
        console.log("you clicked on show all items");
        $scope.showListView = true;
    };

   
   

});