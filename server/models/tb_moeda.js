'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_moeda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_moeda.init({
    id_moeda: DataTypes.INTEGER,
    nome_moeda: DataTypes.STRING,
    vl_moeda_atual: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'tb_moeda',
  });
  return tb_moeda;
};