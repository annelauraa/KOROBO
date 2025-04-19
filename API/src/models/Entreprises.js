const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Entreprises', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    adresse: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Entreprises',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Entreprises_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
