var app = angular.module("app", ['ngRoute','xeditable']);

app.config(function ($routeProvider) {
    "use strict";

    $routeProvider.when("/home", {
        templateUrl: "../view/home.html"
    }).
    when("/login",{
        templateUrl: "../view/user/user.html",
        controller: "UserController"
    }).
    when("/listProducts",{
       templateUrl: "../view/product/listProduct.html",
        controller: "ProductListController"
    }).
    when("/product/:id",{
        templateUrl: "../view/product/product.html",
        controller: "ProductController"
    }).
    when("/listTickets",{
        templateUrl: "../view/ticket/listTicket.html",
        controller: "TicketListController"
    }).
    otherwise({
        redirectTo: "/home"
    });
});

app.factory('authInterceptor', function($rootScope, $q, $window) {
    "use strict";

    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
            }
            return config;
        },
        response: function (response) {
            /*if (response.status === 401) {
                // handle the case where the user is not authenticated
            }*/
            return response || $q.when(response);
        }
    };
});

app.config(function ($httpProvider) {
    "use strict";

    $httpProvider.interceptors.push('authInterceptor');
});
