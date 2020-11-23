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
        const { id } = req.params;  
        try {
            const oneConta = await database.tb_contratos.findOne( { 
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
module.exports = ContratoController