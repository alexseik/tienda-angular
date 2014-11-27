/*global _:false*/
angular.module("app").controller("ProductController", function ($scope,$filter,$routeParams, ProductService,FileReader, $log){
    "use strict";
    $scope.product = {
        typeProduct : null
    };

    $scope.images = [];

    $scope.typeProduct = [
        {value: 1, text:'literatura'},
        {value: 2, text:'texto'},
        {value: 3, text:'material'},
        {value: 4, text:'cuadernillo'},
        {value: 5, text:'novela'},
        {value: 6, text:'literatura infantil'}
    ];

    ProductService.getId($routeParams.id)
        .success(function (data) {
            $scope.product = data;
            if ($scope.product.typeProduct === undefined) {$scope.product.typeProduct = "";}
            $scope.originalProduct = angular.copy($scope.product);
        })
        .error(function (data, status) {
            $log.error("Server KO. Status: " + status + " Msg: " + data);
        });

    $scope.reset = function (){
      $scope.product = $scope.originalProduct;
      $scope.images = [];
    };

    $scope.showStatus = function() {
        var selected = $filter('filter')($scope.typeProduct, {value: $scope.product.typeProduct});
        return ($scope.product.typeProduct && selected.length) ? selected[0].text : 'vacio';
    };

    $scope.updateImage = function () {
        var meter = function (result){
            $scope.images.push(result);
        };
        for (var i = 0;i<$scope.files.length;i++){
            new FileReader(this.files[i], this).then(meter);
        }
    };

});