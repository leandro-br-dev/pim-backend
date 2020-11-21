'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_investimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_investimento.init({
    id_investimento: DataTypes.INTEGER,
    num_conta: DataTypes.INTEGER,
    id_moeda: DataTypes.INTEGER,
    dt_investimento: DataTypes.DATE,
    qtd_moeda: DataTypes.DOUBLE,
    vl_inic_investimento: DataTypes.DOUBLE,
    dt_resgate: DataTypes.DATE,
    vl_resg_investimento: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'tb_investimento',
  });
  return tb_investimento;
};