angular.module('app').factory('Tickets', function($log,TicketService,User, messagingService, events){
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
                self.length = ticketList.length;
                angular.extend(self,ticketList);
                messagingService.publish(
                    events.message._TICKET_LOAD_COMPLETE_,
                    [self]
                );
            }).error(function(data,status){
                $log.error("Server KO. Status: " + status + " Msg: " + data);
            });
        };

        this.initialize();

    };

    return Tickets;
});

angular.module('app').factory('TicketsByClient', function($log,TicketService,messagingService, events){
    'use strict';


    var TicketsByClient = function (client){

        this.initialize = function(){
            var self = this;
            var ticketList = [];
            var clientAux = client;
            TicketService.getByClient(client).success(function(data){
                angular.forEach(data,function(value,key){
                    value.client = clientAux;
                    var total = 0;
                    angular.forEach(value.lines,function(line,key){
                        total += line.quantity*line.unitPrice;
                    },total);
                    value.total = total;
                    this.push(value);
                },ticketList);
                self.length = ticketList.length;
                angular.extend(self,ticketList);
                messagingService.publish(
                    events.message._TICKET_LOAD_COMPLETE_,
                    [self]
                );
            }).error(function(data,status){
                $log.error("Server KO. Status: " + status + " Msg: " + data);
            });
        };

        this.initialize();

    };

    return TicketsByClient;
});

angular.module('app').factory('Ticket', function($log,TicketService,User,ProductFactory){
    'use strict';


    var Ticket = function (ticket){

        this.initialize = function(){
            var self = this;
            self.id = '';
            self.client = '';
            self.total = 0;
            self.descountTotal =0;
            self.numLines = 0;
            self.lines = [];
            if (ticket !== undefined){
                TicketService.getId(ticket).success(function(data){
                    var client = new User(data.client);

                    var result = {
                        id : data.id,
                        client : client,
                        total : 0,
                        descountTotal :0,
                        numLines : 0,
                        lines : []
                    };
                    angular.forEach(data.lines,function(line,key){
                        var product = ProductFactory.getById(line.product);
                        var lineTotal = line.quantity*line.unitPrice;
                        var dto;
                        if (line.dto === undefined){ dto = 0;}
                        else {dto = line.dto;}
                        var auxLine = {
                            total : lineTotal,
                            product : product,
                            quantity : line.quantity,
                            unitPrice : line.unitPrice,
                            updatedAt : line.updatedAt,
                            tax : line.tax,
                            dto : dto
                        };

                        result.lines[result.numLines] = auxLine;
                        result.numLines += 1;
                        result.total += auxLine.total;
                        result.descountTotal += auxLine.dto * auxLine.total;
                    },result);

                    angular.extend(self,result);
                }).error(function(data,status){
                    $log.error("Server KO. Status: " + status + " Msg: " + data);
                });
            }
        };

        this.initialize();

    };

    return Ticket;
});