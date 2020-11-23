'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_moedas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_moedas.init({
    nome_moeda: DataTypes.STRING,
    vl_moeda_atual: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'tb_moedas',
  });
  return tb_moedas;
};