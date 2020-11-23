'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_investimentos', {
       id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cpf_cnpj: {
        type: Sequelize.STRING
      },
      id_moeda: {
        type: Sequelize.INTEGER
      },
      dt_investimento: {
        type: Sequelize.DATE
      },
      vl_investimento_inic: {
        type: Sequelize.DOUBLE
      },
      vl_investimento_atual: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('tb_investimentos');
  }
};