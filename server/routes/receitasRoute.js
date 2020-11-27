const { Router }        = require('express'),
        routes          = Router(),
        AnaliticoReceitasController  = require('../controllers/AnaliticoReceitasController');       


    routes.get('/receitas', AnaliticoReceitasController.findAll);
    routes.get('/receitas/:id_conta', AnaliticoReceitasController.findOne);
   
module.exports = routes;