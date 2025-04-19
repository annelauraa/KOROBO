const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Interventions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    statut: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_site: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Sites',
        key: 'id'
      }
    },
    id_technicien: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Utilisateurs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Interventions',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Interventions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
