angular.module("app").controller("ClientController", function ($scope,$routeParams,User,TicketsByClient) {
    'use strict';
    $scope.client = new User($routeParams.id);

    $scope.tickets = new TicketsByClient($routeParams.id);

    $scope.ticketsCurrentPage = 0;

    $scope.ticketsPerPage = 5;

    $scope.pagedTickets = [];

    $scope.groupTicketsToPages = function (size) {

        if (typeof (size) === 'number'){
            $scope.ticketsPerPage = size;
        }
        $scope.pagedTickets = [];

        for (var i = 0; i < $scope.tickets.length; i++) {
            if (i % $scope.ticketsPerPage === 0) {
                $scope.pagedTickets[Math.floor(i / $scope.ticketsPerPage)] = [ $scope.tickets[i] ];
            } else {
                $scope.pagedTickets[Math.floor(i / $scope.ticketsPerPage)].push($scope.tickets[i]);
            }
        }
        if ($scope.ticketsCurrentPage > $scope.pagedTickets.length){
            $scope.ticketsCurrentPage=0;
        }
    };

    $scope.ticketsRange = function (size) {
        var ret = [];

        for (var i = 0; i < size; i++) {
            ret.push(i);
        }

        return ret;
    };
    $scope.ticketsPrevPage = function () {
        if ($scope.ticketsCurrentPage > 0) {
            $scope.ticketsCurrentPage--;
        }
    };

    $scope.ticketsNextPage = function () {
        if ($scope.ticketsCurrentPage < $scope.pagedTickets.length - 1) {
            $scope.ticketsCurrentPage++;
        }
    };

    $scope.ticketsSetPage = function () {
        $scope.ticketsCurrentPage = this.n;
    };

});