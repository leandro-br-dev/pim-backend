const { Router }        = require('express'),
        routes          = Router(),
        ContratoController  = require('../controllers/ContratoController');       


    routes.get('/contratos', ContratoController.findAll);
    routes.get('/contratos/:num_conta', ContratoController.findOne);
    
module.exports = routes;