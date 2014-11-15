angular.module("app").controller("ProductListController", function ($scope, $routeParams, ItemService, $log) {
    "use strict";

    ItemService.list()
        .success(function (data) {
            $scope.itemList = data;

        })
        .error(function (data, status) {
            $log.error("Server KO. Status: " + status + " Msg: " + data);
        });

});