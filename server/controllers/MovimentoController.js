const { Op } = require('sequelize')
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
        const { num_conta, qtd_dias } = req.params;         
     
        if(qtd_dias > 0){

            try{                      
             

                const DataPesquisada = new Date();              
                DataPesquisada.setDate(DataPesquisada.getDate() - qtd_dias);

                console.log(DataPesquisada);
    
                const oneConta = await database.tb_movimentos.findAll( { 
                    where: 
                    { 
                        num_conta: Number(num_conta),
                        dt_movim: { [Op.gte]: DataPesquisada }
                    } 
                } ); 


                return res.status(200).json(oneConta);
            } catch {
                return res.status(500).json(error.message);
            }

        }else{

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
}    
    


module.exports = MovimentoController