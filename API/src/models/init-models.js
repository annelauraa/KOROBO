const fs = require('fs');
const path = require('path');

module.exports = (sequelize) => {
  const db = {};

  // 1. Charge tous les fichiers .js du dossier (sauf index.js et init-models.js)
  fs.readdirSync(__dirname)
    .filter(file => {
      return (
        file !== 'index.js' &&
        file !== 'init-models.js' &&
        file.endsWith('.js')
      );
    })
    .forEach(file => {
      const model = require(path.join(__dirname, file))(sequelize, sequelize.Sequelize.DataTypes);
      db[model.name] = model;
    });

  // 2. Applique les associations si elles existent
  Object.keys(db).forEach(modelName => {
    if (typeof db[modelName].associate === 'function') {
      db[modelName].associate(db);
    }
  });

  return db;
};