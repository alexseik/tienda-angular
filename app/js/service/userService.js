angular.module("app").service("UserService", function ($http, serverConstants, $log) {
    "use strict";

    var route = serverConstants.baseUrl + "/user/";

    return {
        add: function (user) {
            return $http.post(route, user);
        },
        list: function () {
            return $http.get(route);
        },
        getById: function (id) {
            return $http.get(route + id);
        },
        route : route
    };

});