angular.module('app')
    .value('product',function(){
        'use strict';
        var Product = {
              id : '',
              ean13 : '',
              name : '',
              pvp : '',
              typeProduct : '',
              createdAt : '',
              updatedAt : '',
              productImages : []
          };

          Product.prototype = {

          };

          return Product;
    });