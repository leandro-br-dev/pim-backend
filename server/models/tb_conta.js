'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_conta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_conta.init({
    cpf_cnpj: DataTypes.STRING,
    vl_disp_conta: DataTypes.DOUBLE,
    vl_bloq_conta: DataTypes.DOUBLE,
    vl_lanc_fut_conta: DataTypes.DOUBLE,
    vl_tot_conta: DataTypes.DOUBLE,
    dt_aber_conta: DataTypes.DATEONLY,
    ativo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_conta',
  });
  return tb_conta;
};