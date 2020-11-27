'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TB_CLIENTE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TB_CLIENTE.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf_cnpj: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true,
    },
    dataRef: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: true,
    },    
    cidade: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    estado: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    cep: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    perfil: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chave_acesso: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ativo: DataTypes.BOOLEAN,
    allowNull: true,
  }, {
    sequelize,
    modelName: 'TB_CLIENTE',
  });
  return TB_CLIENTE;
};