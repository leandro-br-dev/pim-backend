const { Router }        = require('express'),
        routes          = Router(),
        ContaController  = require('../controllers/ContaController');       


    routes.get('/contas', ContaController.findAll);
    routes.post('/contas', ContaController.create);    
    routes.put('/contas/:id', ContaController.update);
    routes.delete('/contas/:id', ContaController.delete);

module.exports = routes;