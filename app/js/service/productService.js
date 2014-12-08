angular.module("app").service("ProductService", function ($http, serverConstants, $log) {
    "use strict";

    var route = serverConstants.baseUrl + "/product/";

    return {
        add: function (itemDto) {
            return $http.post(route, itemDto);
        },
        list: function () {
            return $http.get(route);
        },
        getId: function (id) {
            return $http.get(route + id);
        },
        update: function(id,itemDto){
            return $http.put(route + id, itemDto);
        },
        remove: function(id){
            return $http.delete(route + id);
        }
    };

});