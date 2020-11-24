const database = require("../models");

class MovimentoController{

    static async findAll(req, res){

        try {
            const allMovimentos = await database.tb_movimentos.findAll();
            return res.status(200).json(allMovimentos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
        
    }
    static async findOne (req,res){
        const { num_conta } = req.params;         

       try{
            const oneConta = await database.tb_movimentos.findAll( { 
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
    


module.exports = MovimentoController