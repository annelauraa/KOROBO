const Sequelize      = require('sequelize');
  module.exports = function(sequelize, DataTypes) {
  const Entreprises = sequelize.define('Entreprises', {
    id: {
      autoIncrement: true,
      type         : DataTypes.INTEGER,
      allowNull    : false,
      primaryKey   : true
    },
    nom: {
      type     : DataTypes.STRING(255),
      allowNull: true
    },
    telephone: {
      type     : DataTypes.STRING(255),
      allowNull: true
    },
    adresse: {
      type     : DataTypes.TEXT,
      allowNull: true
    },
    logo: {
      type     : DataTypes.STRING,
      allowNull: true
    },
    isVerified: {
      type     : DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false

    }
  }, {
    sequelize,
    tableName : 'Entreprises',
    schema    : 'public',
    timestamps: true,
    indexes   : [
      {
        name  : "Entreprises_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  // Ajoutez seulement cette partie association
  Entreprises.associate = function(models) {
    Entreprises.hasMany(models.Utilisateurs, {
      foreignKey: 'id_entreprise',
      as: 'utilisateurs'
    });
  };

  return Entreprises;

};
