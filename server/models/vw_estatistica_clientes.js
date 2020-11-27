
module.exports = (sequelize, DataTypes) => {
  const VW_ESTATISTICA_CLIENTES = sequelize.define('VW_ESTATISTICA_CLIENTES', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true
      },
      QTD: DataTypes.INTEGER    

      },


            
      {
          freezeTableName: true,
          timestamps: false,
      });
      return VW_ESTATISTICA_CLIENTES;
  }