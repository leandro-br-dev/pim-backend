const database = require("../models");

class TarifaController{

    static async findAll(req, res){

        try {
            const allTarifas = await database.tb_tarifas.findAll();
            return res.status(200).json(allTarifas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
        
    }
    
    static async findOne (req,res){
        const { id } = req.params;         

       try{
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

module.exports = TarifaController