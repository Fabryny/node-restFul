
/* let express = require('express');
let routes = express.Router() */

let api = '/users/'
 module.exports = (app) => {

    app.get( `${api}` ,(req, res) => {
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
    
    app.get( `${api}admin`,(req, res) => {
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
 
}