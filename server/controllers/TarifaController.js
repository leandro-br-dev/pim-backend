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
    
    static async create(req, res){

        const newTarifa = req.body;
        try {
            const createdTarifa = await database.tb_tarifas.create( newTarifa ); 
            return res.status(200).json(createdTarifa);
        } catch {
            return res.status(500).json();
        }
    }

    static async update(req, res){

        const { id } = req.params;
        const updatedTarifa = req.body;
        try {
            await database.tb_tarifas.update(updatedTarifa, { 
                where: 
                { 
                    id: Number(id) 
                } 
            } );   

            const updatedTarifa = await database.tb_tarifas.findOne( { 
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
            await database.tb_tarifas.destroy( { 
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

module.exports = TarifaController