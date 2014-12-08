angular.module("app").controller("ProductListController", function ($scope, $routeParams, ProductFactory,serverConstants,messagingService,events, $log) {
    "use strict";

    $scope.itemsPerPage = 8;
    $scope.pagedItems = [];
    $scope.currentPage = 1;
    $scope.viewMode = 'grid';

    $scope.typeProduct = serverConstants.typeProduct;

    $scope.baseImageRoute = serverConstants.baseUrl+'/product/';

    $scope.productList = ProductFactory.getList();

    $scope.groupToPages = function (size) {

        if (typeof (size) === 'number'){
            $scope.itemsPerPage = size;
        }
        $scope.pagedItems = [];

        for (var i = 0; i < $scope.productList.length; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage) + 1] = [ $scope.productList[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage) + 1].push($scope.productList[i]);
            }
        }
        if ($scope.currentPage > $scope.pagedItems.length){
            $scope.currentPage=0;
        }
    };

    $scope.productsLoad = function(data){
        $scope.productList = data;
        $scope.totalItems = $scope.productList.length;
        $scope.groupToPages($scope.itemsPerPage);
    };

    $scope.setViewMode = function (mode){
        if (mode === 'table'){
            $scope.viewMode = 'table';
        }
        else {
            $scope.viewMode = 'grid';
        }
    };

    $scope.resetTypeProductFilter = function(){
        $scope.search = undefined;
    };

    $scope.productsHandle = messagingService.subscribe(
        events.message._PRODUCTS_LOAD_COMPLETE,
        $scope.productsLoad
    );

    $scope.$on('$destroy', function(){
        messagingService.unsubscribe($scope.productsHandle);
    });
});