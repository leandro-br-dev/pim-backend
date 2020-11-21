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

    
    static async create(req, res){

        const newConta = req.body;
        try {
            const createdConta = await database.tb_conta.create( newConta ); 
            return res.status(200).json(createdConta);
        } catch {
            return res.status(500).json();
        }
    }

    static async update(req, res){

        const { id } = req.params;
        const updateConta = req.body;
        try {
            await database.tb_conta.update(updateConta, { 
                where: 
                { 
                    id: Number(id) 
                } 
            } );   

            const updatedConta = await database.tb_conta.findOne( { 
                where: 
                { 
                    id: Number(id) 
                } 
            } ); 
            return res.status(200).json(updatedConta);
        } catch {
            return res.status(500).json(error.message);
        }
    }


    static async delete(req, res){

        const { id } = req.params;
        try {
            await database.tb_conta.destroy( { 
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

module.exports = ContaController