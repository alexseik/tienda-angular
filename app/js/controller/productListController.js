angular.module("app").controller("ProductListController", function ($scope, $routeParams, ProductService, $log) {
    "use strict";

    ProductService.list()
        .success(function (data) {
            $scope.productList = data;

        })
        .error(function (data, status) {
            $log.error("Server KO. Status: " + status + " Msg: " + data);
        });

});