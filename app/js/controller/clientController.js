angular.module("app").controller("ClientController", function ($scope,$routeParams,User) {

    $scope.client = new User($routeParams.id);
});