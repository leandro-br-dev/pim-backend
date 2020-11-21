const { Router }        = require('express'),
        routes          = Router(),
        InvestimentoController  = require('../controllers/InvestimentoController');       


    routes.get('/investimentos', InvestimentoController.findAll);
    routes.post('/investimentos', InvestimentoController.create);    
    routes.put('/investimentos/:id', InvestimentoController.update);
    routes.delete('/investimentos/:id', InvestimentoController.delete);

module.exports = routes;