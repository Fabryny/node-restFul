// INICIAR SERVIDOR COM HTTP 
/*
const http = require('http');

let server = http.createServer((req,res) => {
    console.log('URL', req.url);
    console.log('metodo', req.method);


    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end('<h2>Hello world</h2>');

        break;

        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json');
            res.end(JSON.stringify({
                users: [{
                    name:'Fabryny',
                    email: 'fabryny.silva@gmail.com',
                    id: 1
                }]
            }));
            break;

    }
});

server.listen(3699,'127.0.0.1', () => {
    console.log('servidor rodando');
})
*/


 //INICIAR SERVIDOR  COM EXPRESS


 const express = require('express');

 let app = express();

 app.get('/',(req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h2>Hello world</h2>');
 });

 app.get('/users',(req, res) => {
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

 
 app.listen(3699,'127.0.0.1', () => {
     console.log('servidor rodando');
 })

