"use strict";

app.controller('ItemViewCtrl', function($scope, $routeParams, ItemStorage){
	$scope.items = [];

	ItemStorage.getItemList()
	.then(function(itemCollection){
		$scope.items = itemCollection;

		$scope.selectedItem = $scope.items.filter(function(item){
			return item.id === $routeParams.itemId;
		})[0];
	});
});