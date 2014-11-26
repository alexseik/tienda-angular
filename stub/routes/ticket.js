module.exports = function(ticket) {
'use strict';

var TICKETS_LINES = [{
    id: 1,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    product: 1,
    quantity: 5,
    unitPrice: 0.50,
    tax: 0.21
},{
    id: 2,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    product: 1,
    quantity: 5,
    unitPrice: 0.50,
    tax: 0.21
},{
    id: 3,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    product: 1,
    quantity: 5,
    unitPrice: 0.50,
    tax: 0.21
},{
    id: 4,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    product: 1,
    quantity: 5,
    unitPrice: 0.50,
    tax: 0.21
},{
    id: 5,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    product: 2,
    quantity: 5,
    unitPrice: 0.50,
    tax: 0.21
},{
    id: 6,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    product: 2,
    quantity: 5,
    unitPrice: 0.50,
    tax: 0.21
},{
    id: 7,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    product: 2,
    quantity: 5,
    unitPrice: 0.50,
    tax: 0.21
},{
    id: 8,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    product: 3,
    quantity: 5,
    unitPrice: 0.50,
    tax: 0.21
}];

var TICKETS = [{
    id: 1,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    client : 1,
    invoice : 1,
    lines: [TICKETS_LINES[0],TICKETS_LINES[1],TICKETS_LINES[2],TICKETS_LINES[3]]
},{
    id: 2,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    client : 2,
    invoice : 2,
    lines: [TICKETS_LINES[4],TICKETS_LINES[5],TICKETS_LINES[6]]
},{
    id: 3,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    client : 2,
    invoice : 2,
    lines: [TICKETS_LINES[7],TICKETS_LINES[8]]
}];

    module.exports.fetchTickets = function (req, res) {
    return res.json(200, TICKETS);
};

    module.exports.fetchTicket = function (req, res) {
    var id = req.params.id;
    if (id < 1 || id > TICKETS.length) return res.json(404,{msg : 'Ticket not found'});
    return res.json(200, TICKETS[id - 1]);
};

    module.exports.fetchTicketsByClient = function (req,res){
    var clientId = req.params.id;
    var result = [];
    var i=0;
    for(var idx in TICKETS){
        if(TICKETS[idx].client === clientId){
            result[i]=TICKETS[idx];
            i++;
        }
    }
    if (result != []) return res.json(200, result);

    return res.json(404,{msg : 'Ticket not found'});
};

    module.exports.fetchTicketsByInvoice = function (req,res){
    var invoice = req.params.id;
    var result = [];
    var i=0;
    for(var idx in TICKETS){
        if(TICKETS[idx].invoice === invoice){
            result[i]=TICKETS[idx];
            i++;
        }
    }
    if (result != []) return res.json(200, result);

    return res.json(404,{msg : 'Ticket not found'});
};

    module.exports.saveTicket = function (req,res){
    var ticket = req.body;
    if (ticket.id != "") return res.json(422,{msg:'Ticket ' + ticket.id + ' exists'});
    if (ticket.client == undefined ) return res.json(422,{msg:'not client'});
    if (ticket.lines == undefined || ticket.lines.length == 0) return res.json(422,{msg:'not lines'});
    for (var i = 0; i<ticket.lines.length; i++){
        if(ticket.lines[i].product == undefined) return res.json(422,{msg:'not product on line '+ i});
        if(ticket.lines[i].quantity == undefined) return res.json(422,{msg:'not quantity  on line ' + i});
    }
    ticket.id = 4;
    return res.json(201,ticket);
};


    module.exports.updateTicket = function (req,res){
    var ticket = req.body;
    var id = req.params.id;
    if (id != ticket.id) return res.json(422,{msg:'Ticket ' + ticket.id + ' is not the same'});
    if (ticket.id != "") return res.json(422,{msg:'Ticket ' + ticket.id + ' exists'});
    if (ticket.client == undefined ) return res.json(422,{msg:'not client'});
    if (ticket.lines == undefined || ticket.lines.length == 0) return res.json(422,{msg:'not lines'});
    for (var i = 0; i<ticket.lines.length; i++){
        if(ticket.lines[i].product == undefined) return res.json(422,{msg:'not product on line '+ i});
        if(ticket.lines[i].quantity == undefined) return res.json(422,{msg:'not quantity  on line ' + i});
    }
    ticket.id = 4;
    return res.json(201,ticket);
};

    module.exports.deleteTicket = function (req,res){
    var id = req.params.id;
    if (id < 1 || id > TICKETS.length) return res.json(404,{msg : 'Ticket not found'});
    return res.json(200);
};

module.exports.TICKETS = TICKETS;

return module.exports;
};