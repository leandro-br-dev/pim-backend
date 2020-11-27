const { Router }        = require('express'),
        routes          = Router(),
        ClienteController  = require('../controllers/ClienteController');       


    routes.get('/clientes', ClienteController.findAll);
    routes.get('/clientes/:cpf_cnpj', ClienteController.findOne);
    routes.post('/clientes', ClienteController.create);    
    routes.put('/clientes/login/:cpf_cnpj', ClienteController.login);
    routes.put('/clientes/:cpf_cnpj', ClienteController.update);
    routes.delete('/clientes/:cpf_cnpj', ClienteController.delete);

module.exports = routes;