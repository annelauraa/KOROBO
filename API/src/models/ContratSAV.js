const Sequelize      = require('sequelize');
      module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ContratSAV', {
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
    description: {
      type     : DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName : 'ContratSAV',
    schema    : 'public',
    timestamps: false,
    indexes   : [
      {
        name  : "ContratSAV_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
