"use strict";

app.controller("NavCtrl", function ($scope, $window, SearchTermData) {
    $scope.searchText = SearchTermData;
    $scope.isLoggedIn = false;
});