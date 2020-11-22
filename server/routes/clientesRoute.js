const { Router }        = require('express'),
        routes          = Router(),
        ClienteController  = require('../controllers/ClienteController');       


    routes.get('/clientes', ClienteController.findAll);
    routes.get('/clientes/:id', ClienteController.findOne);
    routes.post('/clientes', ClienteController.create);    
    routes.put('/clientes/login/:cpf_cnpj', ClienteController.login);
    routes.put('/clientes/:id', ClienteController.update);
    routes.delete('/clientes/:id', ClienteController.delete);

module.exports = routes;