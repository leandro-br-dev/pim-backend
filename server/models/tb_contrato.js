'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_contratos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_contratos.init({
    num_conta: DataTypes.INTEGER,
    id_contraparte: DataTypes.STRING,
    vl_contrato: DataTypes.DOUBLE,
    dt_contrato: DataTypes.DATEONLY,
    desc_contrato: DataTypes.STRING,
    anexo_contrato: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_contratos',
  });
  return tb_contratos;
};