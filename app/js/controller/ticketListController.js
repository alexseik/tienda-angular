/* global _:false*/
angular.module("app").controller("TicketListController", function ($scope,Tickets) {
    "use strict";
    $scope.ticketList = new Tickets();
});