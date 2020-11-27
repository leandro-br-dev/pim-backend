'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TB_CLIENTEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf_cnpj: {
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true
      },
      dataRef: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: true
      },    
      cidade: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      estado: {
        type: Sequelize.STRING(2),
        allowNull: true
      },
      cep: {
        type: Sequelize.STRING(8),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      password: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      perfil: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: true
      },
      chave_acesso: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true
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
    await queryInterface.dropTable('TB_CLIENTEs');
  }
};