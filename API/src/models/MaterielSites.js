const Sequelize      = require('sequelize');
      module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MaterielSites', {
    id: {
      autoIncrement: true,
      type         : DataTypes.INTEGER,
      allowNull    : false,
      primaryKey   : true
    },
    id_site: {
      type      : DataTypes.INTEGER,
      allowNull : true,
      references: {
        model: 'Sites',
        key  : 'id'
      }
    },
    id_materiel: {
      type      : DataTypes.INTEGER,
      allowNull : true,
      references: {
        model: 'Materiels',
        key  : 'id'
      }
    },
    quantite: {
      type     : DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName : 'MaterielSites',
    schema    : 'public',
    timestamps: true,
    indexes   : [
      {
        name  : "MaterielSites_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
