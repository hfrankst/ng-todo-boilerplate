"use strict";


app.controller('ItemListCtrl', function($scope, ItemStorage, SearchTermData){
	
    $scope.searchText = SearchTermData;
    
    ItemStorage.getItemList()
    .then(function(itemCollection){
        $scope.items = itemCollection;
    });

	 $scope.deleteItem = function (itemId) {
        console.log("delete item", itemId);
        ItemStorage.deleteItem(itemId)
        .then(function(response){
            ItemStorage.getItemList().then(function(itemCollection){
                $scope.items = itemCollection;
            });
        });
    };

});