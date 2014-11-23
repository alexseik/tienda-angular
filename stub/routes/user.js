"use strict";
var jwt = require('jsonwebtoken');

var USERS = [{
    id : 1,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    name : "Eduardo",
    email : "edua@gmail.com"
},{
    id : 2,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    name : "Paco",
    email : "paco@gmail.com"
}];

exports.fetchUsers = function (req, res) {
    //setDevHeader(res);
    return res.json(200, USERS);
};

exports.getUser = function (req,res){

};

exports.authenticate = function (req,res){
    //setDevHeader(res);
    if (!(req.body.username === 'john.doe' && req.body.password === 'foobar')) {
        res.send(401, 'Wrong user or password');
        return;
    }

    var user = {
        name: 'John',
        email: 'john@doe.com',
        id: 123
    };

    var token = jwt.sign(user, "secret", { expiresInMinutes: 60*5 });

    res.json({ token: token });
};

function setDevHeader(res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000'); //TODO: EN DURO PA JODER MAS

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);
}



