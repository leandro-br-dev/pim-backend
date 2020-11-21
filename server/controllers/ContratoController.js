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
    
    static async create(req, res){

        const newContrato = req.body;
        try {
            const createdContrato = await database.tb_contratos.create( newContrato ); 
            return res.status(200).json(createdContrato);
        } catch {
            return res.status(500).json();
        }
    }

    static async update(req, res){

        const { id } = req.params;
        const updateContrato = req.body;
        try {
            await database.tb_contratos.update(updateContrato, { 
                where: 
                { 
                    id: Number(id) 
                } 
            } );   

            const updatedContrato = await database.tb_contratos.findOne( { 
                where: 
                { 
                    id: Number(id) 
                } 
            } ); 
            return res.status(200).json(updatedContrato);
        } catch {
            return res.status(500).json(error.message);
        }
    }


    static async delete(req, res){

        const { id } = req.params;
        try {
            await database.tb_contratos.destroy( { 
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

module.exports = ContratoController