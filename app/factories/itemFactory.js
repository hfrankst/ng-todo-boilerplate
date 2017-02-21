"use strict";

app.factory("ItemStorage", function (FirebaseURL, $q, $http) {
	
	let getItemList = () => {
		let items = [];
		return $q((resolve, reject) => {
			$http.get(`${FirebaseURL}/items.json`)
			.then((itemObject) => {
				let itemCollection = itemObject.data;
				Object.keys(itemCollection).forEach((key) => {
					itemCollection[key].id = key;
					items.push(itemCollection[key]);
				});
				resolve(items);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let postNewItem = () => {

	};

	let deleteItem = (itemId) => {

	};

	return {getItemList, postNewItem, deleteItem};
});