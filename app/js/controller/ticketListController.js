/* global _:false*/
angular.module("app").controller("TicketListController", function ($scope,Tickets, messagingService, events) {
    "use strict";
    $scope.ticketList = new Tickets();
    $scope.totalItems = 0;

    $scope.currentPage = 1;
    $scope.itemsPerPage = 5;
    //$scope.numPages = 1;

    $scope.ticketLoad = function (tickets){
        $scope.ticketList = tickets;
        $scope.totalItems = $scope.ticketList.length;
        //$scope.numPages = $scope.totalItems / $scope.maxSize;
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