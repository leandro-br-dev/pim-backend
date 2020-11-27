const database = require("../models");

class InvestimentoController{

    static async findAll(req, res){

        try {
            const allInvestimentos = await database.VW_ANALITICO_RECEITAS.findAll();
            return res.status(200).json(allInvestimentos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
        
    }
    
    static async findOne (req,res){
        const { id_conta } = req.params;
        //const { moeda } = req.body;            
      
        try {
            const oneConta = await database.VW_ANALITICO_RECEITAS.findAll( { 
                where: 
                { 
                    id: id_conta,
                   // id_moeda: moeda
                } 
            } ); 
            return res.status(200).json(oneConta);
        } catch {
            return res.status(500).json();
        }
    }
}

module.exports = InvestimentoController