'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_investimentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_investimentos.init({
    cpf_cnpj: DataTypes.STRING,
    id_moeda: DataTypes.INTEGER,
    dt_investimento: DataTypes.STRING,
    vl_investimento_inic: DataTypes.DOUBLE,
    vl_investimento_atual: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'tb_investimentos',
  });
  return tb_investimentos;
};