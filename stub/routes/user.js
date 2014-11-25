"use strict";
var jwt = require('jsonwebtoken');

var ADDRESS = [{
    id : 1,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    street: 'C/Virgen del val',
    number: '45',
    locationDetail: 'piso 3 puerta 1 - simancas',
    postalCode: '28037',
    city: 'madrid',
    province: 'madrid',
    country: 'españa'
},{
    id : 2,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    street: 'C/Virgen del val',
    number: '45',
    locationDetail: 'piso 3 puerta 1 - simancas',
    postalCode: '28037',
    city: 'madrid',
    province: 'madrid',
    country: 'españa'
}];

var PHONE = [{
    id : 1,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    number: '914056789',
    description: 'telefono casa'
},{
    id : 2,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    number: '914056789',
    description: 'telefono casa'
},{
    id : 3,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    number: '914056789',
    description: 'telefono casa'
}]

var CLIENT = [{
    id : 1,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    name : "Eduardo",
    email : "edua@gmail.com",
    role : "CUSTOMER",
    address: [ADDRESS[0]],
    phone: [PHONE[0]]
},{
    id : 2,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    name : "Paco",
    email : "paco@gmail.com",
    role : "CUSTOMER",
    address: [ADDRESS[1]],
    phone: [PHONE[1],PHONE[2]]
}];

exports.fetchUsers = function (req, res) {
    return res.json(200, CLIENT);
};

exports.fetchUser = function (req,res){
    var id = req.param.id;
    if (id == undefined) return res.json(422, { error: 'The client id does not contain data.' });
    if (id < 1 || id > CLIENT.length) return res.json(422, { error: 'The client does not exist.' });
    return res.json(200, CLIENT[id-1]);
};

exports.saveUser = function (req,res){
    var user = req.body;
    if (user.id != "") res.json(422, { error: 'The client already exist.' });
    if (user.name == undefined ||
        (user.email == undefined &&
        (user.phone == undefined || user.phone == []) )) res.json(422, { error: 'The client does not contain data.' });
    for(var idx in CLIENT){
        if(CLIENT[idx].name === user.name){
            return res.json(422, { error: 'The client ' + user.name + ' it\'s already created.' });
        }
    }
    user.id = 4;
    return res.json(201, user);
};

exports.updateUser = function (req,res){
    var user = req.body;
    var id = req.param.id;
    if (id != user.id) res.json(400, { error: 'The client is not the same.' });
    if (id < 1 || id > CLIENT.length) res.json(404, { error: 'The client id does not exist.' });
    return res.json(200, user);
};

exports.deleteUser = function (req, res){
    var id = req.param.id;
    if (id < 1 || id > CLIENT.length) res.json(404, { error: 'The client id does not exist.' });
    return res.json(200)
};

exports.authenticate = function (req,res){
    if (!(req.body.username === 'seik' && req.body.password === 'dseosama')) {
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



