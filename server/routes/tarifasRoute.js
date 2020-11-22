const { Router }        = require('express'),
        routes          = Router(),
        TarifaController  = require('../controllers/TarifaController');       


    routes.get('/tarifas', TarifaController.findAll);
    routes.get('tarifas/:id', TarifaController.findOne);

module.exports = routes;