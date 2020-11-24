const database = require("../models");

class ContratoController{

    static async findAll(req, res){

        try {
            const allContratos = await database.tb_contratos.findAll();
            return res.status(200).json(allContratos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
        
    }
    
    static async findOne (req,res){
        const { num_conta } = req.params;  
        try {
            const oneConta = await database.tb_contratos.findAll( { 
                where: 
                { 
                    num_conta: Number(num_conta) 
                } 
            } ); 
            return res.status(200).json(oneConta);
        } catch {
            return res.status(500).json(error.message);
        }
    }

}
module.exports = ContratoController