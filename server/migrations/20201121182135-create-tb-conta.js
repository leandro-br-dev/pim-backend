'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_conta', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cpf_cnpj: {
        type: Sequelize.STRING
      },
      vl_disp_conta: {
        type: Sequelize.DOUBLE
      },
      vl_bloq_conta: {
        type: Sequelize.DOUBLE
      },
      vl_lanc_fut_conta: {
        type: Sequelize.DOUBLE
      },
      vl_tot_conta: {
        type: Sequelize.DOUBLE
      },
      dt_aber_conta: {
        type: Sequelize.DATEONLY
      },
      ativo: {
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
    await queryInterface.dropTable('tb_conta');
  }
};