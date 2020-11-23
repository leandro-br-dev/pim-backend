const { Router }        = require('express'),
        routes          = Router(),
        ContaController  = require('../controllers/ContaController');       


    routes.get('/contas', ContaController.findAll);
    routes.get('/contas/:cpf_cnpj', ContaController.findOne);
   
module.exports = routes;