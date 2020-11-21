const { Router }        = require('express'),
        routes          = Router(),
        MovimentoController  = require('../controllers/MovimentoController');       


    routes.get('/movimentos', MovimentoController.findAll);
    routes.post('/movimentos', MovimentoController.create);    
    routes.put('/movimentos/:id', MovimentoController.update);
    routes.delete('/movimentos/:id', MovimentoController.delete);

module.exports = routes;