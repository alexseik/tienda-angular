var app = angular.module("app", ['ngRoute']);

angular.module("app").config(function ($routeProvider) {
    "use strict";

    $routeProvider.when("/home", {
        templateUrl: "../view/home.html"
    }).
        otherwise({
            redirectTo: "/home"
        });
});