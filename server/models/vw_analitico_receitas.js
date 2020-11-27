module.exports = (sequelize, DataTypes) => {
  const VW_ANALITICO_RECEITAS = sequelize.define('VW_ANALITICO_RECEITAS', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true
      },
      financeiro: DataTypes.DOUBLE,     
      confirma_efetivacao: DataTypes.BOOLEAN        
      },


            
      {
          freezeTableName: true,
          timestamps: false,
      });
      return VW_ANALITICO_RECEITAS;
  }