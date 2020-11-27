const { Router }        = require('express'),
        routes          = Router(),
        estatisticaClientesController  = require('../controllers/EstatisticaClienteController');       


    routes.get('/estatistica_clientes', estatisticaClientesController.findAll);    
   
module.exports = routes;