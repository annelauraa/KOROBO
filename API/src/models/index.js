require('dotenv').config();
const { Sequelize } = require('sequelize');

// 1. Configuration de base
const sequelize = new Sequelize(process.env.DB_URI, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: process.env.NODE_ENV === 'development' ? console.log : false
});

// 2. Initialisation des modèles
const initModels = require('./init-models');
const db = initModels(sequelize);

// 3. Fonction de synchronisation
async function syncDatabase(options = { alter: true }) {
  try {
    console.log('🔄 Début de la synchronisation...');
    
    // Désactive temporairement les contraintes FK
    await sequelize.query('SET CONSTRAINTS ALL DEFERRED');

    // Synchronisation des tables dans l'ordre logique
    await db.SequelizeMeta.sync(options);
    await db.Entreprises.sync(options);
    await db.ContratSAV.sync(options);
    await db.TypeInstallation.sync(options);
    await db.InstallationElectrique.sync(options);
    await db.Utilisateurs.sync(options);
    await db.Materiels.sync(options);
    await db.Sites.sync(options);
    await db.Interventions.sync(options);
    await db.MaterielSites.sync(options);
    await db.Notifications.sync(options);

    console.log('✅ Synchronisation terminée');
  } catch (error) {
    console.error('❌ Erreur de synchronisation :', error);
    throw error;
  } finally {
    // Réactive les contraintes
    await sequelize.query('SET CONSTRAINTS ALL IMMEDIATE');
  }
}

// 4. Test de connexion
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion DB réussie');
  } catch (error) {
    console.error('❌ Connexion DB échouée :', error);
  }
})();

module.exports = {
  ...db,
  sequelize,
  Sequelize,
  // syncDatabase
};