"use strict";

app.controller("ItemEditCtrl", function($scope, $location, $routeParams, ItemStorage){
  $scope.title = "Edit Item";
  $scope.btnText = "Update";
  $scope.newTask = {};

  ItemStorage.getSingleItem($routeParams.itemId)
  .then(function successCallback(response){
     console.log("getSingleItemresponse", response);
      $scope.newTask = response;
  });
    
  $scope.addNewItem = function(){
    ItemStorage.updateItem($routeParams.itemId, $scope.newTask)
    .then(function successCallback(response) {
      console.log(response);
      $location.url("/items/list");
    });
  };
});