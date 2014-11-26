'use strict';

var INVOICE  =[{
    client : 1,
    ticketList: [TICKETS[0]],
    tax: 0.16,
    effectiveDate: new Date(2012, 5, 13, 9, 30, 45),
    effectiveAddress:ADDRESS[0],
    total: 30.5,
    discount: 0.10
},{
    client : 2,
    ticketList: [TICKETS[1],TICKETS[2]],
    tax: 0.16,
    effectiveDate: new Date(2012, 5, 13, 9, 30, 45),
    effectiveAddress:ADDRESS[0],
    total: 30.5,
    discount: 0.10
}];