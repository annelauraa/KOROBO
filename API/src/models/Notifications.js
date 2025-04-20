const Sequelize      = require('sequelize');
      module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Notifications', {
    id: {
      autoIncrement: true,
      type         : DataTypes.INTEGER,
      allowNull    : false,
      primaryKey   : true
    },
    message: {
      type     : DataTypes.STRING(255),
      allowNull: true
    },
    date: {
      type     : DataTypes.DATE,
      allowNull: true
    },
    id_utilisateur: {
      type      : DataTypes.INTEGER,
      allowNull : true,
      references: {
        model: 'Utilisateurs',
        key  : 'id'
      }
    },
    id_intervention: {
      type      : DataTypes.INTEGER,
      allowNull : true,
      references: {
        model: 'Interventions',
        key  : 'id'
      }
    }
  }, {
    sequelize,
    tableName : 'Notifications',
    schema    : 'public',
    timestamps: true,
    indexes   : [
      {
        name  : "Notifications_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
