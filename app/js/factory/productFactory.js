angular.module('app').factory('Product', function($log,ProductService,User){
    'use strict';

    var Product = function (product){

        this.initialize = function(){
            var self = this;
            ProductService.getId(product).success(function(data){
                angular.extend(self,data);
            }).error(function(data,status){
                $log.error("Server KO. Status: " + status + " Msg: " + data);
            });
        };

        this.initialize();

    };

    return Product;
});