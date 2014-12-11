angular.module('app').controller('TicketModalInstanceController', function ($scope, $modalInstance, ProductFactory,product,messagingService,events,parentScope) {
    'use strict';

    $scope.alertsMsg = [
        { type: 'danger', msg: 'EAN13 no encontrado' },
        { type: 'success', msg: 'Producto encontrado' }
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

    $scope.searchProduct = function(){
        $scope.alerts = [];
        var p = product();
        p.ean13 = $scope.newLine.product.ean13;
        ProductFactory.getByQuery(p);
    };

    $scope.productLoad = function(productList){
        $scope.newLine.product = productList[0];
        $scope.newLine.unitPrice = productList[0].pvp;
        $scope.newLine.quantity = 1;
        $scope.alerts.push($scope.alertsMsg[1]);
    };
    $scope.productLoadError = function(){
        $scope.alerts.push($scope.alertsMsg[0]);
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
