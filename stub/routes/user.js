module.exports = function(user) {
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
    nif : "67546432X",
    details : "Losifua sdaf oiwrelk afsfiuwerl safklj iouals ilasdf lk iuasfasfkj ",
    email : "edua@gmail.com",
    role : "CUSTOMER",
    address: [ADDRESS[0]],
    phone: [PHONE[0]]
},{
    id : 2,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    name : "Paco",
    nif : "67546212W",
    details : "Losifua sdaf oiwrelk afsfiuwerl safklj iouals ilasdf lk iuasfasfkj ",
    email : "paco@gmail.com",
    role : "CUSTOMER",
    address: [ADDRESS[1]],
    phone: [PHONE[1],PHONE[2]]
}];

    module.exports.fetchUsers = function (req, res) {
    return res.json(200, CLIENT);
};

    module.exports.fetchUser = function (req,res){
    var id = req.params.id;
    if (id == undefined) return res.json(422, { error: 'The client id does not contain data.' });
    if (id < 1 || id > CLIENT.length) return res.json(422, { error: 'The client does not exist.' });
    return res.json(200, CLIENT[id-1]);
};

    module.exports.saveUser = function (req,res){
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

    module.exports.updateUser = function (req,res){
    var user = req.body;
    var id = req.params.id;
    if (id != user.id) res.json(400, { error: 'The client is not the same.' });
    if (id < 1 || id > CLIENT.length) res.json(404, { error: 'The client id does not exist.' });
    return res.json(200, user);
};

    module.exports.deleteUser = function (req, res){
    var id = req.params.id;
    if (id < 1 || id > CLIENT.length) res.json(404, { error: 'The client id does not exist.' });
    return res.json(200)
};

    module.exports.authenticate = function (req,res){
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

    module.exports.ADDRESS = ADDRESS;

    return module.exports;
};

