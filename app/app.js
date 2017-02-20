"use strict";

var app = angular.module("ToDoApp", []);


app.controller("ToDoCtrl", function($scope){
    $scope.welcome = "hello";
    $scope.showListView = true;
    $scope.newTask = {};

    $scope.items = [
  {
    id: 0,
    task: "mow the lawn",
    isCompleted: false,
    dueDate: "12/5/17",
    assignedTo: "Greg",
    location: "Joe's house",
    urgency: "low",
    dependencies: "sunshine, clippers, hat, water, headphones"
  },
  {
    id: 1,
    task: "grade quizzes",
    isCompleted: false,
    dueDate: "12/5/15",
    assignedTo: "Christina",
    location: "NSS",
    urgency: "high",
    dependencies: "wifi, tissues, vodka"
  },
  {
    id: 2,
    task: "take a nap",
    isCompleted: false,
    dueDate: "5/21/16",
    assignedTo: "Joe",
    location: "Porch of lakefront cabin",
    urgency: "medium",
    dependencies: "hammock, silence"
  }
];

    $scope.newItem = function () {
        console.log("you clicked on new item");
        $scope.showListView = false;
    };

    $scope.allItem = function () {
        console.log("you clicked on show all items");
        $scope.showListView = true;
    };

    $scope.addNewItem = function () {
        console.log("add new Item");
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;
        console.log("you added a new item", $scope.newTask);
        $scope.items.push($scope.newTask);
        $scope.newTask = {};
    };

    $scope.deleteItem = function (itemId) {
        console.log("delete item", itemId);
        for (var i = 0; i < $scope.items.length; i++){
            if ($scope.items[i].id === itemId){
                $scope.items.splice(i, 1);
            }            
        }
    };





























});