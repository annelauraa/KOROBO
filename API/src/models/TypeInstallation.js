const Sequelize      = require('sequelize');
      module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TypeInstallation', {
    id: {
      autoIncrement: true,
      type         : DataTypes.INTEGER,
      allowNull    : false,
      primaryKey   : true
    },
    designation: {
      type     : DataTypes.STRING,
      allowNull: false
    },
    id_entreprise: {
      type      : DataTypes.INTEGER,
      allowNull : false,
      references: {
        model: 'Entreprises',
        key  : 'id'
      }
    }
  }, {
    sequelize,
    tableName : 'TypeInstallation',
    schema    : 'public',
    timestamps: false,
    indexes   : [
      {
        name  : "TypeInstallation_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
