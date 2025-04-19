const { Sequelize } = require("sequelize");
const config = require("../config/config.json");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const initModels = require("./init-models"); 
const models = initModels(sequelize); 

models.sequelize = sequelize;
models.Sequelize = Sequelize;

async function syncTables() {
  try {
    console.log("🔄 Synchronisation des tables...");

    // Tables sans dépendances
    await models.Entreprises.sync();
    await models.Utilisateurs.sync();
    await models.ContratSAV.sync();
    await models.TypeInstallation.sync();
    await models.InstallationElectrique.sync();
    await models.Materiels.sync();
    await models.Sites.sync();
    await models.MaterielSites.sync();

    // Tables qui ont des références
    await models.Sites.sync();
    await models.Interventions.sync(); // Interventions dépend de Sites

    console.log("✅ Synchronisation terminée !");
  } catch (error) {
    console.error("❌ Erreur de synchronisation :", error);
  }
}

// Exécuter la synchronisation
syncTables();

/**
 * TODO pour la synchronisation des tables 
 * Executer le commande suivante:
 * $ npm run sync-db
 */

module.exports = models;
