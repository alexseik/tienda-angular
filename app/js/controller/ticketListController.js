/* global _:false*/
angular.module("app").controller("TicketListController", function ($scope,Tickets) {
    "use strict";
    $scope.ticketList = new Tickets();

    $scope.totalItems = $scope.ticketList.length;
    $scope.currentPage = 1;
    $scope.maxSize = 5;

    $scope.pageChanged = function() {


    };
});