const db   = require("../models");  // Importer les modèles Sequelize
const Site = db.Sites;              // Récupérer le modèle des sites

  // Fonction utilitaire pour gérer les erreurs
const handleError = (res, error) => {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
};

const siteController = {
    getAllSites: async (req, res) => {
        try {
            const { id_entreprise } = req.params;
            const sites             = await Site.findAll({
                where: {
                    id_entreprise: id_entreprise
                }
            }); // Récupérer tous les sites
            res.status(200).json(sites);  // Retourner les résultats en JSON
        } catch (error) {
            handleError(res, error);
        }
    },

      // Créer un nouvel site
    createSite: async (req, res) => {
        try {
            const      { nom, localisation, proprietaire, numero_dossier, installateur, contact_1, contact_2, type_installation, type_electrique, schema_SLD, id_entreprise } = req.body;                       // Extraire les données du corps de la requête
            const      nouvelSite = await Site.create({ nom, localisation, proprietaire, numero_dossier, installateur, contact_1, contact_2, type_installation, type_electrique, schema_SLD, id_entreprise });  // Créer un site
            res.status(201).json(nouvelSite);                                                                                                                                                                   // Retourner l'site créé
        } catch (error) {
            handleError(res, error);
        }
    },

      // Obtenir un site par ID
    getSiteById: async (req, res) => {

        try {
            const { id } = req.params;
            const site   = await Site.findByPk(id);
            if (!site) {
                return res.status(404).json({ message: "Site non trouvé" });
            }
            res.status(200).json(site);
        } catch (error) {
            handleError(res, error);
        }
    },

      // Mettre à jour un site
    updateSite: async (req, res) => {
        try {
            const { nom, localisation, proprietaire, numero_dossier, installateur, contact_1, contact_2, type_installation, type_electrique, schema_SLD, id_entreprise } = req.body;
            const site                                                                                                                                                   = await Site.findByPk(req.params.id);
            if (!site) {
                return res.status(404).json({ message: "Site non trouvé" });
            }
            await site.update({ nom, localisation, proprietaire, numero_dossier, installateur, contact_1, contact_2, type_installation, type_electrique, schema_SLD, id_entreprise });
            res.status(200).json(site);
        } catch (error) {
            handleError(res, error);
        }
    },

      // Supprimer un site
    deleteSite: async (req, res) => {
        try {
            const site = await Site.findByPk(req.params.id);
            if (!site) {
                return res.status(404).json({ message: "Site non trouvé" });
            }
            await site.destroy();
            res.status(200).json({ message: "Site supprimé" });
        } catch (error) {
            handleError(res, error);
        }
    }
};

module.exports = siteController;
