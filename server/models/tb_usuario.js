'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_usuario.init({
    cpf_cnpj: DataTypes.STRING,
    senha:DataTypes.STRING,
    perfil: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    chave_acesso: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'tb_usuario',
  });
  return tb_usuario;
};