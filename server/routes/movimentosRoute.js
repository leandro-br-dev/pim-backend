const { Router }        = require('express'),
        routes          = Router(),
        MovimentoController  = require('../controllers/MovimentoController');       


    routes.get('/movimentos', MovimentoController.findAll);
    routes.get('/movimentos/:num_conta/:qtd_dias', MovimentoController.findOne);

module.exports = routes;