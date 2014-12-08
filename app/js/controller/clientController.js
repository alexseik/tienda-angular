angular.module("app").controller("ClientController", function ($scope,$routeParams,User,TicketsByClient,messagingService, events) {
    'use strict';
    $scope.client = new User($routeParams.id);

    $scope.ticketList = new TicketsByClient($routeParams.id);

    $scope.totalItems = 0;

    $scope.currentPage = 1;
    $scope.itemsPerPage = 5;

    $scope.ticketLoad = function (tickets){

        $scope.totalItems = tickets.length;

        $scope.currentPage = 1;
        for (var i = 0; i < $scope.totalItems; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.ticketList[Math.floor(i / $scope.itemsPerPage)] = [ tickets[i] ];
            } else {
                $scope.ticketList[Math.floor(i / $scope.itemsPerPage)].push(tickets[i]);
            }
        }
    };

    $scope.ticketsHandle = messagingService.subscribe(
        events.message._TICKET_LOAD_COMPLETE_,
        $scope.ticketLoad
    );

    $scope.$on('$destroy', function(){
        messagingService.unsubscribe($scope.ticketsHandle);
    });

});