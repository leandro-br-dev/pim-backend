const { Router }        = require('express'),
        routes          = Router(),
        MoedaController  = require('../controllers/MoedaController');       


    routes.get('/moedas', MoedaController.findAll);
    routes.get('/moedas/:id', MoedaController.findOne);
    
module.exports = routes;