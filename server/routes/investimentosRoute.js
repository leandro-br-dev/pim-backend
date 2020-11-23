const { Router }        = require('express'),
        routes          = Router(),
        InvestimentoController  = require('../controllers/InvestimentoController');       


    routes.get('/investimentos', InvestimentoController.findAll);
    routes.get('/investimentos/:id', InvestimentoController.findOne);

module.exports = routes;