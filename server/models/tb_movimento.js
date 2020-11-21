'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_movimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_movimento.init({
    id_movimento: DataTypes.INTEGER,
    num_conta: DataTypes.INTEGER,
    tipo_movim: DataTypes.STRING,
    vl_lanc_movim: DataTypes.DOUBLE,
    dt_movim: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tb_movimento',
  });
  return tb_movimento;
};