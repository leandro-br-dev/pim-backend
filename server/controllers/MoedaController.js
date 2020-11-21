const database = require("../models");

class MoedaController{

    static async findAll(req, res){

        try {
            const allMoedas = await database.tb_moedas.findAll();
            return res.status(200).json(allMoedas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
        
    }
    
    static async create(req, res){

        const newMoeda = req.body;
        try {
            const createdMoeda = await database.tb_moedas.create( newMoeda ); 
            return res.status(200).json(createdMoeda);
        } catch {
            return res.status(500).json();
        }
    }

    static async update(req, res){

        const { id } = req.params;
        const updatedMoeda = req.body;
        try {
            await database.tb_moedas.update(updatedMoeda, { 
                where: 
                { 
                    id: Number(id) 
                } 
            } );   

            const updatedMoeda = await database.tb_moedas.findOne( { 
                where: 
                { 
                    id: Number(id) 
                } 
            } ); 
            return res.status(200).json(updatedMoeda);
        } catch {
            return res.status(500).json(error.message);
        }
    }


    static async delete(req, res){

        const { id } = req.params;
        try {
            await database.tb_moedas.destroy( { 
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

module.exports = MoedaController