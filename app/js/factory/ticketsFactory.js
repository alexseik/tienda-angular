angular.module('app').factory('Tickets', function($log,$http,TicketService,User){
    'use strict';


    var Tickets = function (){

        this.initialize = function(){
            var self = this;
            var ticketList = [];
            TicketService.list().success(function(data){
                angular.forEach(data,function(value,key){
                    var user = new User(value.client);
                    value.client = user;
                    var total = 0;
                    angular.forEach(value.lines,function(line,key){
                        total += line.quantity*line.unitPrice;
                    },total);
                    value.total = total;
                    this.push(value);
                },ticketList);
                angular.extend(self,ticketList);
            }).error(function(data,status){
                $log.error("Server KO. Status: " + status + " Msg: " + data);
            });
        };

        this.initialize();

    };

    return Tickets;
});
