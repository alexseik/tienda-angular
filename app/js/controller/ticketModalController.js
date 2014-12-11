angular.module('app').controller('TicketModalInstanceController', function ($scope, $modalInstance, ProductFactory,product,messagingService,events,parentScope) {
    'use strict';

    $scope.alertsMsg = [
        { type: 'danger', msg: 'EAN13 no encontrado' },
        { type: 'success', msg: 'Producto encontrado' },
        { type: 'success', msg: 'Productos encontrados' },
        { type: 'danger', msg: 'Producto no encontrado' },
    ];

    $scope.alerts = [];

    $scope.parentScope = parentScope;

    $scope.errorMsg = '';

    $scope.auxLine = {
        id: '',
        createdAt : '',
        updatedAt : '',
        product: {
            ean13: '',
            name: ''
        },
        dto: 0,
        total:0,
        quantity: 1,
        unitPrice: 0,
        tax: 0
    };

    $scope.newLine = $scope.auxLine;

    $scope.added = [];

    $scope.productList = false;

    $scope.searchProductByEan13 = function(){
        $scope.alerts = [];
        var p = {ean13 : $scope.newLine.product.ean13};
        p.ean13 = $scope.newLine.product.ean13;
        ProductFactory.getByQuery(p);
    };

    $scope.searchProductLikeName = function(){
        if (($scope.newLine.product.name !== '') &&
            ($scope.newLine.product.name.length >= 3) &&
            ($scope.newLine.product.name.length % 3 === 0)){

            $scope.alerts = [];
            var p = {name : $scope.newLine.product.name};
            ProductFactory.getByQuery(p);
        }
    };

    $scope.selectProduct = function(index){
        $scope.newLine.product = $scope.productList[index];
        $scope.newLine.unitPrice = $scope.productList[index].pvp;
        $scope.productList = [];
        $scope.alerts = [];
    };

    $scope.productLoad = function(productList,productQuery){
        if (productQuery.ean13 !== undefined && productQuery.ean13 !== ''){
            $scope.newLine.product = productList[0];
            $scope.newLine.unitPrice = productList[0].pvp;
            $scope.newLine.quantity = 1;
            $scope.alerts.push($scope.alertsMsg[1]);
        } else if (productQuery.name !== undefined && productQuery.name !== ''){
            $scope.productList = productList.splice(0,10);
            $scope.alerts.push($scope.alertsMsg[2]);
        }

    };
    $scope.productLoadError = function(productList,productQuery){
        if (productQuery.ean13 !== undefined && productQuery.ean13 !== '') {
            $scope.alerts.push($scope.alertsMsg[0]);
        } else if (productQuery.name !== undefined && productQuery.name !== '') {
            $scope.alerts.push($scope.alertsMsg[3]);
        }
        $scope.productList = [];
    };

    $scope.productHandle = messagingService.subscribe(
        events.message._PRODUCTS_LOAD_COMPLETE,
        $scope.productLoad
    );

    $scope.productErrorHandle = messagingService.subscribe(
        events.message._PRODUCTS_LOAD_ERROR,
        $scope.productLoadError
    );

    $scope.validateLine = function (){
        return true;
    };

    $scope.insertLine = function(){
        if ($scope.validateLine()){
            $scope.errorMsg = '';
            var insertLine = angular.copy($scope.newLine);
            $scope.parentScope.ticket.lines.push(insertLine);
            $scope.newLine = $scope.auxLine;
            $scope.newLine.product = $scope.auxLine.product;
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.$on('$destroy', function(){
        messagingService.unsubscribe($scope.productLoad);
        messagingService.unsubscribe($scope.productLoadError);
    });
});
