const { Sequelize } = require("sequelize");
const config        = require("../config/config.json");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // Cela force l'utilisation de SSL
        rejectUnauthorized: false // Nécessaire si vous n'avez pas de certificat valide
      }
    },
    pool: config.development.pool,
    logging: false
  }
);

const initModels = require("./init-models");
const models     = initModels(sequelize);

models.sequelize = sequelize;
models.Sequelize = Sequelize;

async function syncTables() {
  try {
    console.log("🔄 Synchronisation des tables...");

    // Étape 1: Désactiver les contraintes de clé étrangère
    await sequelize.query('SET CONSTRAINTS ALL DEFERRED');

    // Étape 2: Créer les tables SANS les relations
    await createTablesWithoutRelations();

    // Étape 3: Ajouter les relations après que toutes les tables existent
    // await addRelations();

    console.log("✅ Synchronisation terminée !");
  } catch (error) {
    console.error("❌ Erreur de synchronisation :", error);
    throw error;
  }
}

async function createTablesWithoutRelations() {
  // Création des tables sans relations
  await models.SequelizeMeta.sync({ force: false });
  await models.Entreprises.sync({ force: false });
  await models.ContratSAV.sync({ force: false });
  await models.TypeInstallation.sync({ force: false });
  await models.InstallationElectrique.sync({ force: false });
  await models.Utilisateurs.sync({ force: false });
  await models.Materiels.sync({ force: false });
  await models.Sites.sync({ force: false });
  await models.Interventions.sync({ force: false });
  await models.MaterielSites.sync({ force: false });
  await models.Notifications.sync({ force: false });
}

async function addRelations() {
  // Ré-établir toutes les relations après création des tables
  const {
    ContratSAV,
    Entreprises,
    InstallationElectrique,
    Interventions,
    MaterielSites,
    Materiels,
    Notifications,
    Sites,
    TypeInstallation,
    Utilisateurs
  } = models;

  // Ajoutez ici toutes vos relations comme dans init-models.js
  Sites.belongsTo(ContratSAV, { as: "type_contrat_ContratSAV", foreignKey: "type_contrat" });
  ContratSAV.hasMany(Sites, { as: "Sites", foreignKey: "type_contrat" });
  // ... ajoutez toutes les autres relations ...
  
  // Synchroniser à nouveau pour appliquer les relations
  await sequelize.sync();
}

  // Exécuter la synchronisation
syncTables();

  /**
 * TODO pour la synchronisation des tables 
 * Executer le commande suivante: 
 * $ npm run sync-db
 */

module.exports = models;
