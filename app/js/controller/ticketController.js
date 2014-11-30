angular.module("app").controller("TicketController", function ($scope,$routeParams,Ticket) {
    "use strict";
    $scope.ticket = new Ticket($routeParams.id);

    $scope.recalculateDiscount = function (){
        var discount = 0;
        for (var i = 0; i< $scope.ticket.lines.length;i++){
            discount += $scope.ticket.lines[i].dto * $scope.ticket.lines[i].total;
        }
        $scope.ticket.descountTotal = discount;
        $scope.ticket.neto = $scope.ticket.total - $scope.ticket.descountTotal;
    };

    $scope.recalculateTotal = function (){
        var total = 0;
        for (var i = 0; i< $scope.ticket.lines.length;i++){
            $scope.ticket.lines[i].total = $scope.ticket.lines[i].unitPrice * $scope.ticket.lines[i].quantity;
            total += $scope.ticket.lines[i].total;
        }
        $scope.ticket.total = total;
        $scope.ticket.neto = $scope.ticket.total - $scope.ticket.descountTotal;
    };

    $scope.deleteLine = function(id){
        $scope.ticket.lines.splice(id,1);
    };

    $scope.addLine = function(){
        var newLine = {
            total : 0,
            product : null,
            quantity : 0,
            unitPrice : 0,
            updatedAt : null,
            tax : 0,
            dto : 0
        };
        $scope.ticket.lines.push(newLine);
    };
});