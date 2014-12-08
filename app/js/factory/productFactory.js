angular.module('app').service('ProductFactory',function ($log,ProductService,product,messagingService,events){
    'use strict';
    var getById = function (productId){
        var self = product();
        angular.extend(self,product());
        if (productId !== undefined){
            ProductService.getId(productId).success(function(data){
                angular.extend(self,data);
                messagingService.publish(
                    events.message._PRODUCT_LOAD_COMPLETE,
                    [self] );
            }).error(function(data,status){
                $log.error("Server KO. Status: " + status + " Msg: " + data);
            });
        }
        return self;
    };

    var getList = function(){
        var productList = [];
        ProductService.list()
            .success(function (data) {
                angular.extend(productList,data);
                messagingService.publish(
                    events.message._PRODUCTS_LOAD_COMPLETE,
                    [productList] );
            })
            .error(function (data, status) {
                $log.error("Server KO. Status: " + status + " Msg: " + data);
            });
        return productList;
    };
    var add = function(productDto){
        var self = product();
        ProductService.add(productDto)
            .success(function(data){
                angular.extend(self,data);
                messagingService.publish(
                    events.message._PRODUCT_SAVE_COMPLETE,
                    [self] );
            })
            .error(function (data, status) {
                $log.error("Server KO. Status: " + status + " Msg: " + data);
            });
        return self;
    };
    var update = function(productDto){
        var self = productDto.product;
        ProductService.update(self.id,productDto)
            .success(function(data){
                angular.extend(self,data);
                messagingService.publish(
                    events.message._PRODUCT_SAVE_COMPLETE,
                    [self] );
            })
            .error(function (data, status) {
                $log.error("Server KO. Status: " + status + " Msg: " + data);
            });
        return self;
    };
    var remove = function(productId){
        ProductService.remove(productId)
            .success(function(data){
                messagingService.publish(
                    events.message._PRODUCT_REMOVE_COMPLETE,
                    [productId] );
            })
            .error(function (data, status) {
                $log.error("Server KO. Status: " + status + " Msg: " + data);
            });
    };

    return {
        getById: getById,
        getList: getList,
        add : add,
        update : update,
        remove : remove
    };
});