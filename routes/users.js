
let express = require('express');
let routes = express.Router()

routes.get( '/' ,(req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json({
        users: [{
            name:'Fabryny',
            email: 'fabryny.silva@gmail.com',
            id: 1
        }]
    });
 });

 routes.get( `/admin`,(req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json({
        users: [{
            name:'Fabryny ADMIN',
            email: 'fabryny.silva@gmail.com',
            id: 1
        }]
    });
 });
 module.exports = routes;