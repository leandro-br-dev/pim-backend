const database = require("../models");

class InvestimentoController{

    static async findAll(req, res){

        try {
            const allInvestimentos = await database.tb_investimentos.findAll();
            return res.status(200).json(allInvestimentos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
        
    }
    
    static async findOne (req,res){
        const { cpf_cnpj } = req.params;
        //const { moeda } = req.body;            
      
        try {
            const oneConta = await database.tb_investimentos.findAll( { 
                where: 
                { 
                    cpf_cnpj: cpf_cnpj,
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