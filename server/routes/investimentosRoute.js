const { Router }        = require('express'),
        routes          = Router(),
        InvestimentoController  = require('../controllers/InvestimentoController');       


    routes.get('/investimentos', InvestimentoController.findAll);
    routes.put('/investimentos/:cpf_cnpj', InvestimentoController.findOne);

module.exports = routes;