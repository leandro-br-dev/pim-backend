const { Router }        = require('express'),
        routes          = Router(),
        analiticoReceitasControler  = require('../controllers/analiticoreceitascontroler');       


    routes.get('/receitas', analiticoReceitasControler.findAll);
    routes.get('/receitas/:id_conta', analiticoReceitasControler.findOne);
   
module.exports = routes;