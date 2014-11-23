angular.module("app").controller('UserController', function ($scope, $http, $window) {
    'use strict';

    var success = {type:"success", msg:"Welcome!"};
    var danger =  {type:"danger", msg:"Error on user authentication."};

    $scope.alert = null;

    $scope.submit = function () {
        $http
            .post('http://localhost:3000/authenticate', $scope.user)
            .success(function (data, status, headers, config) {
                $window.sessionStorage.token = data.token;
                $scope.authenticatedUser = $scope.user;
                $scope.alert = success;
                //$scope.goTo("home");
            })
            .error(function (data, status, headers, config) {
                // Erase the token if the user fails to log in
                delete $window.sessionStorage.token;

                // Handle login errors here
                $scope.alert = danger;
            });
    };
});