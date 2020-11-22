const database = require("../models");

class UsuarioController{

    static async findAll(req, res){

        try {
            const allUsuarios = await database.tb_usuario.findAll();
            return res.status(200).json(allUsuarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
        
    }
    
    static async findOne (req,res){
        const { id } = req.params;         

       try{
            const oneUsuario = await database.tb_usuario.findOne( { 
                where: 
                { 
                    id: Number(id) 
                } 
            } ); 
            return res.status(200).json(oneUsuario);
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



}

module.exports = UsuarioController