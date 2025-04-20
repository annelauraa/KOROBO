const Sequelize      = require('sequelize');
      module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Utilisateurs', {
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
    email: {
      type     : DataTypes.STRING(255),
      allowNull: true
    },
    mot_de_passe: {
      type     : DataTypes.STRING(255),
      allowNull: true
    },
    role: {
      type     : DataTypes.STRING(255),
      allowNull: true
    },
    id_entreprise: {
      type      : DataTypes.INTEGER,
      allowNull : true,
      references: {
        model: 'Entreprises',
        key  : 'id'
      }
    }
  }, {
    sequelize,
    tableName : 'Utilisateurs',
    schema    : 'public',
    timestamps: true,
    indexes   : [
      {
        name  : "Utilisateurs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
