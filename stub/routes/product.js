"use strict";

var PRODUCTS = [{
    id : 1,
    name : "Bolígrafo",
    price : 0.50,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    productImages : null
},{
    id : 2,
    name : "Cuaderno",
    price : 2.50,
    createdAt : new Date(2013, 5, 13, 9, 30, 45),
    updatedAt : new Date(2013, 5, 13, 9, 30, 45),
    productImages : null
},{
    id : 1,
    name : "Libro",
    price : 17.50,
    createdAt : new Date(2012, 5, 13, 9, 30, 45),
    updatedAt : new Date(2012, 5, 13, 9, 30, 45),
    productImages : null
}];

var IMAGES = [{
    id : 1,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    route : "/product/1/img_boli1.jpg",
    size : 35,
    format : "JPG",
    product : 1
},{
    id : 2,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    route : "/product/1/img_boli2.jpg",
    size : 58,
    format : "JPG",
    product : 1
},{
    id : 3,
    createdAt : new Date(2014, 5, 13, 9, 30, 45),
    updatedAt : new Date(2014, 9, 10, 9, 30, 45),
    route : "/product/2/img_Cuaderno1.jpg",
    size : 40,
    format : "JPG",
    product : 2
}];


exports.fetchProducts = function (req, res) {
    setDevHeader(res);
    var productsDTO = [{
        product : PRODUCTS[0],
        images : [IMAGES[0].route,IMAGES[1].route]
    },{
        product : PRODUCTS[1],
        images : [IMAGES[2].route]
    },{
        product : PRODUCTS[2],
        images : []
    }]
    return res.json(200, productsDTO);
};


function setDevHeader(res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000'); //TODO: EN DURO PA JODER MAS

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
}