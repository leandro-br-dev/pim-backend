'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_contratos', {
      id_contrato: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      num_conta: {
        type: Sequelize.INTEGER
      },
      id_contraparte: {
        type: Sequelize.STRING
      },
      vl_contrato: {
        type: Sequelize.DOUBLE
      },
      dt_contrato: {
        type: Sequelize.DATEONLY
      },
      desc_contrato: {
        type: Sequelize.STRING
      },
      anexo_contrato: {
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
    await queryInterface.dropTable('tb_contratos');
  }
};