"use strict";


app.controller('ItemListCtrl', function($scope, ItemStorage, SearchTermData, AuthFactory){
	
    $scope.searchText = SearchTermData;
    let user = AuthFactory.getUser();
    console.log("user", user);

    ItemStorage.getItemList(user)
    .then(function(itemCollection){
        $scope.items = itemCollection;
    });

	 $scope.deleteItem = function (itemId) {
        console.log("delete item", itemId);
        ItemStorage.deleteItem(itemId)
        .then(function(response){
            ItemStorage.getItemList(user).then(function(itemCollection){
                $scope.items = itemCollection;
            });
        });
    };

});