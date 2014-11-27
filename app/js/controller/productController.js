angular.module("app").controller("ProductController", function ($scope,$routeParams, ProductService, $log){
    "use strict";
    $scope.product = null;

    ProductService.getById($routeParams.id)
        .success(function (data) {
            $scope.product = data;
        })
        .error(function (data, status) {
            $log.error("Server KO. Status: " + status + " Msg: " + data);
        });
});