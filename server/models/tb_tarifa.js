'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_tarifas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_tarifas.init({
    num_conta: DataTypes.INTEGER,
    tipo_tarifa: DataTypes.STRING,
    vl_lanc_tarifa: DataTypes.DOUBLE,
    dt_tarifa: DataTypes.DATE,
    confirm_tarifa: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tb_tarifas',
  });
  return tb_tarifas;
};