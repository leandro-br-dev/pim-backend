const { Router }        = require('express'),
        routes          = Router(),
        MovimentoController  = require('../controllers/MovimentoController');       


    routes.get('/movimentos', MovimentoController.findAll);
    routes.get('/movimentos/:id', MovimentoController.findOne);

module.exports = routes;