'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_usuario', {

      cpf_cnpj: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING,
        allowNull:true
      },
      perfil: {
        type: Sequelize.STRING
      },
      ativo: {
        type: Sequelize.BOOLEAN
      },
      chave_acesso: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_usuario');
  }
};