const { Router }        = require('express'),
        routes          = Router(),
        TarifaController  = require('../controllers/TarifaController');       


    routes.get('/tarifas', TarifaController.findAll);
    routes.post('/tarifas', TarifaController.create);    
    routes.put('/tarifas/:id', TarifaController.update);
    routes.delete('/tarifas/:id', TarifaController.delete);

module.exports = routes;