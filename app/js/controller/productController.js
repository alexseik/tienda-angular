/*global _:false*/
angular.module("app").controller("ProductController", function ($scope,$location,$filter,$routeParams, ProductFactory,FileReader,serverConstants,messagingService,events){
    "use strict";
    $scope.product = {
        typeProduct : null
    };

    $scope.savedProduct = undefined;

    $scope.images = [];

    $scope.typeProduct = serverConstants.typeProduct;

    $scope.baseImageRoute = serverConstants.baseUrl+'/product/';

    $scope.product = ProductFactory.getById($routeParams.id);


    $scope.productLoad = function(data){
        $scope.product = data;
        $scope.originalProduct = angular.copy($scope.product);
    };

    $scope.productSave = function (data){
        $location.path('/product/' + data.id);
    };

    $scope.reset = function (){
      $scope.product = $scope.originalProduct;
      $scope.images = [];
    };

    $scope.save = function(){
        var productDto = {
            product : $scope.product,
            images : $scope.images
        };
        if (productDto.product.id !== ""){
            ProductFactory.update(productDto);
        } else {
            ProductFactory.add(productDto);
        }
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

    $scope.deleteOldImage = function (index){
        $scope.product.productImages.splice(index,1);
    };

    $scope.deleteNewImage = function (index){
        $scope.images.splice(index,1);
    };

    $scope.productLoadHandle = messagingService.subscribe(
        events.message._PRODUCT_LOAD_COMPLETE,
        $scope.productLoad
    );

    $scope.productAddHandle = messagingService.subscribe(
        events.message._PRODUCT_SAVE_COMPLETE,
        $scope.productSave
    );

    $scope.$on('$destroy', function(){
        messagingService.unsubscribe($scope.productLoadHandle);
    });

});