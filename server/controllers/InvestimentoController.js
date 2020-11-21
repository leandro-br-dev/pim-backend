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
    
    static async create(req, res){

        const newInvestimento = req.body;
        try {
            const createdInvestimento = await database.tb_investimentos.create( newInvestimento ); 
            return res.status(200).json(createdInvestimento);
        } catch {
            return res.status(500).json();
        }
    }

    static async update(req, res){

        const { id } = req.params;
        const updateInvestimento = req.body;
        try {
            await database.tb_investimentos.update(updateInvestimento, { 
                where: 
                { 
                    id: Number(id) 
                } 
            } );   

            const updatedInvestimento = await database.tb_investimentos.findOne( { 
                where: 
                { 
                    id: Number(id) 
                } 
            } ); 
            return res.status(200).json(updatedInvestimento);
        } catch {
            return res.status(500).json(error.message);
        }
    }


    static async delete(req, res){

        const { id } = req.params;
        try {
            await database.tb_investimentos.destroy( { 
                where: 
                { 
                    id: Number(id) 
                } 
            } ); 
            return res.status(200).json({mensagem: `id ${id} deletado`});
        } catch {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = InvestimentoController