const ClienteController = require('../controllers/ClienteController');
const ContaController = require('../controllers/ContaController');
const InvestimentoController = require('../controllers/InvestimentoController');
const ContratoController = require('../controllers/ContratoController');
const MoedaController = require('../controllers/MoedaController');
const TarifaController = require('../controllers/TarifaController');
const MovimentoController = require('../controllers/MovimentoController');
const analiticoReceitasController = require('../controllers/AnaliticoReceitasController');
const EstatisticaClienteController = require('../controllers/EstatisticaClienteController');

const { Router } = require('express'),
        routes   = Router(),
        clientes  = require('./clientesRoute'),
        contas   = require('./contasRoute'),
        investimentos = require('./investimentosRoute'),
        contratos = require('./contratosRoute'),
        moedas = require('./moedasRoute'),
        tarifas = require('./tarifasRoute'),
        movimentos = require("./movimentosRoute"),
        receitas = require("./receitasRoute")
        estatisticaClientes = require("./estatisticaClientesRoute")
    
    routes.use(clientes); 
    routes.use(contas);
    routes.use(investimentos);
    routes.use(contratos);
    routes.use(moedas);
    routes.use(tarifas);
    routes.use(movimentos);
    routes.use(receitas);
    routes.use(estatisticaClientes);

module.exports = routes;
