angular.module("app").controller("ProductListController", function ($scope, $routeParams, ProductService,serverConstants, $log) {
    "use strict";

    $scope.itemsPerPage = 8;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
    $scope.viewMode = 'grid';

    $scope.typeProduct = serverConstants.typeProduct;

    $scope.baseImageRoute = serverConstants.baseUrl+'/product/';

    ProductService.list()
        .success(function (data) {
            $scope.productList = data;
            $scope.groupToPages($scope.itemsPerPage);
        })
        .error(function (data, status) {
            $log.error("Server KO. Status: " + status + " Msg: " + data);
        });

    $scope.groupToPages = function (size) {

        if (typeof (size) === 'number'){
            $scope.itemsPerPage = size;
        }
        $scope.pagedItems = [];

        for (var i = 0; i < $scope.productList.length; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.productList[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.productList[i]);
            }
        }
        if ($scope.currentPage > $scope.pagedItems.length){
            $scope.currentPage=0;
        }
    };

    $scope.setViewMode = function (mode){
        if (mode === 'table'){
            $scope.viewMode = 'table';
        }
        else {
            $scope.viewMode = 'grid';
        }
    };

    $scope.range = function (size) {
        var ret = [];

        for (var i = 0; i < size; i++) {
            ret.push(i);
        }

        return ret;
    };
    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };

    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
            $scope.currentPage++;
        }
    };

    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };

    $scope.resetTypeProductFilter = function(){
        $scope.search = undefined;
    };
});