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

	let postNewItem = (newItem) => {
		return $q((resolve, reject) => {
			$http.post(`${FirebaseURL}/items.json`,
				JSON.stringify(newItem))
			.then((ObjectFromFirebase) => {
				resolve(ObjectFromFirebase);
			})
			.catch((error) => {
				reject(error);
			});
		});

	};

	let deleteItem = (itemId) => {
		console.log("delete in factory", itemId);
		return $q((resolve, reject) => {
			$http.delete(`${FirebaseURL}/items/${itemId}.json`)
			.then((ObjectFromFirebase) => {
				resolve(ObjectFromFirebase);
			});
		});

	};

	return {getItemList, postNewItem, deleteItem};
});