"use strict";

app.controller('ItemViewCtrl', function($scope, $routeParams, ItemStorage, AuthFactory){
	$scope.items = [];

	let user = AuthFactory.getUser();//gets the currentUser
	
	console.log("the user from ItemViewCtrl", user);
	ItemStorage.getItemList(user)//the ItemStorage is talking to Firebase and is calling to the itemFactory.js
	.then(function(itemCollection){
		console.log("itemCollection", itemCollection);
		$scope.items = itemCollection;

		$scope.selectedItem = $scope.items.filter(function(item){
			return item.id === $routeParams.itemId;
		})[0];
	});
});