const { Router }        = require('express'),
        routes          = Router(),
        ContratoController  = require('../controllers/ContratoController');       


    routes.get('/contratos', ContratoController.findAll);
    routes.post('/contratos', ContratoController.create);    
    routes.put('/contratos/:id', ContratoController.update);
    routes.delete('/contratos/:id', ContratoController.delete);

module.exports = routes;