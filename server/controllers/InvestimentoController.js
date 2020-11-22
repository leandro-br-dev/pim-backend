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
        const { id } = req.params;      

        try {
            const oneConta = await database.tb_conta.findOne( { 
                where: 
                { 
                    id: Number(id) 
                } 
            } ); 
            return res.status(200).json(oneConta);
        } catch {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = InvestimentoController