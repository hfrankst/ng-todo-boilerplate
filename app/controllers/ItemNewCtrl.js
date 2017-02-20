"use strict";

app.controller('ItemNewCtrl', function($scope){
	$scope.newTask = {};

	 $scope.addNewItem = function () {
        console.log("add new Item");
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;
        console.log("you added a new item", $scope.newTask);
        $scope.items.push($scope.newTask);
        $scope.newTask = {};
    };
});