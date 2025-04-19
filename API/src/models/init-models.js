var DataTypes = require("sequelize").DataTypes;
var _ContratSAV = require("./ContratSAV");
var _Entreprises = require("./Entreprises");
var _InstallationElectrique = require("./InstallationElectrique");
var _Interventions = require("./Interventions");
var _MaterielSites = require("./MaterielSites");
var _Materiels = require("./Materiels");
var _Notifications = require("./Notifications");
var _SequelizeMeta = require("./SequelizeMeta");
var _Sites = require("./Sites");
var _TypeInstallation = require("./TypeInstallation");
var _Utilisateurs = require("./Utilisateurs");

function initModels(sequelize) {
  var ContratSAV = _ContratSAV(sequelize, DataTypes);
  var Entreprises = _Entreprises(sequelize, DataTypes);
  var InstallationElectrique = _InstallationElectrique(sequelize, DataTypes);
  var Interventions = _Interventions(sequelize, DataTypes);
  var MaterielSites = _MaterielSites(sequelize, DataTypes);
  var Materiels = _Materiels(sequelize, DataTypes);
  var Notifications = _Notifications(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var Sites = _Sites(sequelize, DataTypes);
  var TypeInstallation = _TypeInstallation(sequelize, DataTypes);
  var Utilisateurs = _Utilisateurs(sequelize, DataTypes);

  Sites.belongsTo(ContratSAV, { as: "type_contrat_ContratSAV", foreignKey: "type_contrat" });
  ContratSAV.hasMany(Sites, { as: "Sites", foreignKey: "type_contrat" });
  InstallationElectrique.belongsTo(Entreprises, { as: "entreprise", foreignKey: "id_entreprise" });
  Entreprises.hasMany(InstallationElectrique, { as: "InstallationElectriques", foreignKey: "id_entreprise" });
  Materiels.belongsTo(Entreprises, { as: "entreprise", foreignKey: "id_entreprise" });
  Entreprises.hasMany(Materiels, { as: "Materiels", foreignKey: "id_entreprise" });
  Sites.belongsTo(Entreprises, { as: "entreprise", foreignKey: "id_entreprise" });
  Entreprises.hasMany(Sites, { as: "Sites", foreignKey: "id_entreprise" });
  TypeInstallation.belongsTo(Entreprises, { as: "entreprise", foreignKey: "id_entreprise" });
  Entreprises.hasMany(TypeInstallation, { as: "TypeInstallations", foreignKey: "id_entreprise" });
  Utilisateurs.belongsTo(Entreprises, { as: "entreprise", foreignKey: "id_entreprise" });
  Entreprises.hasMany(Utilisateurs, { as: "Utilisateurs", foreignKey: "id_entreprise" });
  Sites.belongsTo(InstallationElectrique, { as: "type_electrique_InstallationElectrique", foreignKey: "type_electrique" });
  InstallationElectrique.hasMany(Sites, { as: "Sites", foreignKey: "type_electrique" });
  Notifications.belongsTo(Interventions, { as: "id_intervention_Intervention", foreignKey: "id_intervention" });
  Interventions.hasMany(Notifications, { as: "Notifications", foreignKey: "id_intervention" });
  MaterielSites.belongsTo(Materiels, { as: "id_materiel_Materiel", foreignKey: "id_materiel" });
  Materiels.hasMany(MaterielSites, { as: "MaterielSites", foreignKey: "id_materiel" });
  Interventions.belongsTo(Sites, { as: "id_site_Site", foreignKey: "id_site" });
  Sites.hasMany(Interventions, { as: "Interventions", foreignKey: "id_site" });
  MaterielSites.belongsTo(Sites, { as: "id_site_Site", foreignKey: "id_site" });
  Sites.hasMany(MaterielSites, { as: "MaterielSites", foreignKey: "id_site" });
  Sites.belongsTo(TypeInstallation, { as: "type_installation_TypeInstallation", foreignKey: "type_installation" });
  TypeInstallation.hasMany(Sites, { as: "Sites", foreignKey: "type_installation" });
  Interventions.belongsTo(Utilisateurs, { as: "id_technicien_Utilisateur", foreignKey: "id_technicien" });
  Utilisateurs.hasMany(Interventions, { as: "Interventions", foreignKey: "id_technicien" });
  Notifications.belongsTo(Utilisateurs, { as: "id_utilisateur_Utilisateur", foreignKey: "id_utilisateur" });
  Utilisateurs.hasMany(Notifications, { as: "Notifications", foreignKey: "id_utilisateur" });
  Sites.belongsTo(Utilisateurs, { as: "installateur_Utilisateur", foreignKey: "installateur" });
  Utilisateurs.hasMany(Sites, { as: "Sites", foreignKey: "installateur" });

  return {
    ContratSAV,
    Entreprises,
    InstallationElectrique,
    Interventions,
    MaterielSites,
    Materiels,
    Notifications,
    SequelizeMeta,
    Sites,
    TypeInstallation,
    Utilisateurs,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
