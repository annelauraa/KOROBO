const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Materiels', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    marque: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    constructeur: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_entreprise: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Entreprises',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Materiels',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Materiels_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
