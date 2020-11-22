const { Router }        = require('express'),
        routes          = Router(),
        ContratoController  = require('../controllers/ContratoController');       


    routes.get('/contratos', ContratoController.findAll);
    routes.get('/contratos/:id', ContratoController.findOne);
    
module.exports = routes;