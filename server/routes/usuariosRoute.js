const { Router }           = require('express'),
        routes             = Router(),
        UsuarioController  = require('../controllers/UsuarioController');       


    routes.get('/usuarios', UsuarioController.findAll);
    routes.get('/usuarios/:id', UsuarioController.findOne);
    routes.post('/usuarios', UsuarioController.create);   
    routes.put('/usuarios', UsuarioController.login);    

module.exports = routes;