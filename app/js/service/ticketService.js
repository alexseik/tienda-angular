/* global _*/
angular.module("app").service("TicketService", function ($http,$q, serverConstants, $log) {
    "use strict";

    var route = serverConstants.baseUrl + "/ticket/";

    return {
        add: function (ticket) {
            return $http.post(route, ticket);
        },
        list: function () {
            return $http.get(route);
        },
        getId: function (id) {
            return $http.get(route + id);
        },
        getByClient: function (id) {
            var routeClient = serverConstants.baseUrl + "/user/"+id+"/ticket/";
            return $http.get(routeClient);
        }
    };

});