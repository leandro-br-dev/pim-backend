'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_movimentos', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      num_conta: {
        type: Sequelize.INTEGER
      },
      tipo_movim: {
        type: Sequelize.STRING
      },
      vl_lanc_movim: {
        type: Sequelize.DOUBLE
      },
      dt_movim: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('tb_movimentos');
  }
};