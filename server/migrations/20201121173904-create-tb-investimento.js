'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_investimentos', {
       id_investimento: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      num_conta: {
        type: Sequelize.INTEGER
      },
      id_moeda: {
        type: Sequelize.INTEGER
      },
      dt_investimento: {
        type: Sequelize.DATE
      },
      qtd_moeda: {
        type: Sequelize.DOUBLE
      },
      vl_inic_investimento: {
        type: Sequelize.DOUBLE
      },
      dt_resgate: {
        type: Sequelize.DATE
      },
      vl_resg_investimento: {
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