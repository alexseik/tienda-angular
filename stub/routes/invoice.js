'use strict';

var ticket = require('./ticket.js')(ticket);
var user = require('./user.js')(ticket);

console.log("Session: %j", ticket);

var INVOICE  =[{
    client : 1,
    ticketList: [ticket.TICKETS[0]],
    tax: 0.16,
    effectiveDate: new Date(2012, 5, 13, 9, 30, 45),
    effectiveAddress:user.ADDRESS[0],
    total: 30.5,
    discount: 0.10
},{
    client : 2,
    ticketList: [ticket.TICKETS[1],ticket.TICKETS[2]],
    tax: 0.16,
    effectiveDate: new Date(2012, 5, 13, 9, 30, 45),
    effectiveAddress:user.ADDRESS[0],
    total: 30.5,
    discount: 0.10
}];


exports.fetchInvoices = function (req, res) {
    return res.json(200, INVOICE);
};

exports.fetchInvoice = function (req, res) {
    var id = req.params.id;
    if (id < 1 || id > INVOICE.length) return res.json(422, { error: 'The client does not exist.' });
    return res.json(200, INVOICE[id-1]);
};


exports.saveInvoice = function (req,res){
    var invoice = req.body;
    if (invoice.id != "") res.json(422, { error: 'The invoice already exist.' });
    if (invoice.tax == undefined ||
        (invoice.client == undefined &&
        (invoice.total == undefined))) res.json(422, { error: 'The client does not contain data.' });

    invoice.id = INVOICE.length;
    return res.json(201, invoice);
};

exports.updateInvoice = function (req,res){
    var invoice = req.body;
    var id = req.params.id;
    if (id != invoice.id) res.json(400, { error: 'The client is not the same.' });
    if (id < 1 || id > INVOICE.length) res.json(404, { error: 'The client id does not exist.' });
    return exports.saveInvoice(req,res);
};

exports.deleteInvoice = function (req, res){
    var id = req.params.id;
    if (id < 1 || id > INVOICE.length) res.json(404, { error: 'The client id does not exist.' });
    return res.json(200)
};
