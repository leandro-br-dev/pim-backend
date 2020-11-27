module.exports = (sequelize, DataTypes) => {
  const VW_ANALITICO_RECEITAS = sequelize.define('VW_ANALITICO_RECEITAS', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true
      },
      RECEITAS: DataTypes.DOUBLE,
      tipo_movim: DataTypes.STRING,
      confirma_efetivacao: DataTypes.BOOLEAN        
      },


            
      {
          freezeTableName: true,
          timestamps: false,
      });
      return VW_ANALITICO_RECEITAS;
  }