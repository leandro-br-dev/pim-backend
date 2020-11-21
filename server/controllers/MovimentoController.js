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
    
    static async create(req, res){

        const newMovimento = req.body;
        try {
            const createdMovimento = await database.tb_movimentos.create( newMovimento ); 
            return res.status(200).json(createdMovimento);
        } catch {
            return res.status(500).json();
        }
    }

    static async update(req, res){

        const { id } = req.params;
        const updatedMovimento = req.body;
        try {
            await database.tb_movimentos.update(updatedMovimento, { 
                where: 
                { 
                    id: Number(id) 
                } 
            } );   

            const updatedMovimento = await database.tb_movimentos.findOne( { 
                where: 
                { 
                    id: Number(id) 
                } 
            } ); 
            return res.status(200).json(updatedMovimento);
        } catch {
            return res.status(500).json(error.message);
        }
    }


    static async delete(req, res){

        const { id } = req.params;
        try {
            await database.tb_movimentos.destroy( { 
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

module.exports = MovimentoController