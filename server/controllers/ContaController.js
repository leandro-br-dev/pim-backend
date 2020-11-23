const { text } = require("express");
const database = require("../models");

class ContaController{

    static async findAll(req, res){

        try {
            const allContas = await database.tb_conta.findAll();
            return res.status(200).json(allContas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
        
    }
    static async findOne (req,res){
        const { cpf_cnpj } = req.params;
   
        try {
            const oneConta = await database.tb_conta.findOne( { 
                where: 
                { 
                    cpf_cnpj: cpf_cnpj,
                } 
            } ); 
            return res.status(200).json(oneConta);
        } catch {
            return res.status(500).json(error.message);
        }
    } 
      
}

module.exports = ContaController