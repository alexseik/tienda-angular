"use strict";

//imports
var express = require('express');
var expressJwt = require('express-jwt');


var product = require('./routes/product');
var user = require('./routes/user');

var http = require('http');
var path = require('path');




var app = express();

// Configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/rest', expressJwt({secret: "secret"}));

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

app.all('*', function(req, res, next) {
    // add details of what is allowed in HTTP request headers to the response headers
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    //res.header('Access-Control-Allow-Credentials', false);
    res.header('Access-Control-Max-Age', '86400');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, authorization');
    // the next() function continues execution and will move onto the requested URL/URI
    next();
});

app.options('*', function(req, res) {
    res.send(200);
});

//Routes
app.get('/rest/product', product.fetchProducts);
app.get('/rest/product/:id', product.fetchProduct);
app.post('/rest/product', product.saveProduct);
app.put('/rest/product/:id', product.updateProduct);
app.delete('/rest/product/:id', product.deleteProduct);

app.get('/rest/user', user.fetchUsers);
app.get('/rest/user/:id', user.fetchUser);
app.post('rest/user',user.saveUser);
app.put('/rest/user/:id', user.updateUser);
app.delete('/rest/user/:id', user.deleteUser);
app.post('/authenticate', user.authenticate);
//app.options.('/authenticate', user.authenticate);

//Ticket rest api
app.get('/rest/ticket', ticket.fetchTickets);
app.get('/rest/ticket/:id', ticket.fetchTicket);
app.get('/rest/user/:id/ticket', ticket.fetchTicketsByClient);
app.get('/rest/invoice/:id/ticket', ticket.fetchTicketsByInvoice);
app.post('/rest/ticket', ticket.saveTicket);
app.put('/rest/ticket/:id', ticket.updateTicket);
app.delete('/rest/ticket/:id',ticket.deleteTicket);
//Server run
module.exports = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
