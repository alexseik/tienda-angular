var app = angular.module("app", ['ngRoute']);

angular.module("app").config(function ($routeProvider) {
    "use strict";

    $routeProvider.when("/home", {
        templateUrl: "../view/home.html"
    }).
        when("/listProducts",{
           templateUrl: "../view/product/listProduct.html"
        }).
        otherwise({
            redirectTo: "/home"
        });
});