const database = require("../models");

class EstatisticaClienteController{

    static async findAll(req, res){

        try {
            const allInvestimentos = await database.VW_ESTATISTICA_CLIENTES.findAll();
            return res.status(200).json(allInvestimentos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
        
    }   
 
}

module.exports = EstatisticaClienteController