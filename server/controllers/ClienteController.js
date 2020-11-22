const database = require("../models");

class ClienteController{

    static async findAll(req, res){

        try {
            const allClientes = await database.TB_CLIENTE.findAll();
            return res.status(200).json(allClientes);
        } catch (error) {
            return res.status(500).json(error.message);
        }
        
    }
    static async findOne (req,res){
        const { id } = req.params;         

        try {
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

    static async login(req, res){

        const { cpf_cnpj } = req.params;
        const { password } = req.body;    
        const updateCliente = req.body;
        try {
            await database.TB_CLIENTE.update(updateCliente, { 
                where: 
                { 
                    cpf_cnpj: cpf_cnpj,
                    password: password,
                    ativo: 1
                } 
            } );   

            const updatedCliente = await database.TB_CLIENTE.findOne( { 
                where: 
                { 
                    cpf_cnpj: cpf_cnpj,
                } 
            } ); 
            return res.status(200).json(updatedCliente);
        } catch {
            return res.status(500).json();
        }

        
    }

    static async create(req, res){

        const newCliente = req.body;
        try {
            const createdClient = await database.TB_CLIENTE.create( newCliente ); 
            return res.status(200).json(createdClient);
        } catch {
            return res.status(500).json();
        }
    }

    static async update(req, res){

        const { id } = req.params;
        const updateCliente = req.body;
        try {
            await database.TB_CLIENTE.update(updateCliente, { 
                where: 
                { 
                    id: Number(id) 
                } 
            } );   

            const updatedCliente = await database.TB_CLIENTE.findOne( { 
                where: 
                { 
                    id: Number(id) 
                } 
            } ); 
            return res.status(200).json(updatedCliente);
        } catch {
            return res.status(500).json(error.message);
        }
    }


    static async delete(req, res){

        const { id } = req.params;
        try {
            await database.TB_CLIENTE.destroy( { 
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

module.exports = ClienteController