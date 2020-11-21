'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_tarifas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_tarifa: {
        type: Sequelize.INTEGER
      },
      num_conta: {
        type: Sequelize.INTEGER
      },
      tipo_tarifa: {
        type: Sequelize.STRING
      },
      vl_lanc_tarifa: {
        type: Sequelize.DOUBLE
      },
      dt_tarifa: {
        type: Sequelize.DATE
      },
      confirm_tarifa: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('tb_tarifas');
  }
};