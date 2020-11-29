const { Router }        = require('express'),
        routes          = Router(),
        ClienteController  = require('../controllers/ClienteController');       


    routes.get('/relatorios/clientes', ClienteController.findAllAtivos);


module.exports = routes;