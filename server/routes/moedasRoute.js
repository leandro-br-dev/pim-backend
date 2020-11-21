const { Router }        = require('express'),
        routes          = Router(),
        MoedaController  = require('../controllers/MoedaController');       


    routes.get('/moedas', MoedaController.findAll);
    routes.post('/moedas', MoedaController.create);    
    routes.put('/moedas/:id', MoedaController.update);
    routes.delete('/moedas/:id', MoedaController.delete);

module.exports = routes;