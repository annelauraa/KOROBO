const db = require("../models"); // Importer les modèles Sequelize
const InstallationElectrique = db.InstallationElectrique; // Récupérer le modèle des installationElectriques

// Fonction utilitaire pour gérer les erreurs
const handleError = (res, error) => {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
};

const installationElectriqueController = {
    getAllInstallationElectriques: async (req, res) => {
        try {
            const { id_entreprise } = req.params;
            const installationElectriques = await InstallationElectrique.findAll({
                where: {
                    id_entreprise: id_entreprise
                }
            }); // Récupérer tous les installationElectriques
            res.status(200).json(installationElectriques); // Retourner les résultats en JSON
        } catch (error) {
            handleError(res, error);
        }
    },

    // Créer un nouvel installationElectrique
    createInstallationElectrique: async (req, res) => {
        try {
            const { designation, id_entreprise } = req.body; // Extraire les données du corps de la requête
            const nouvelInstallationElectrique = await InstallationElectrique.create({ designation, id_entreprise }); // Créer un installationElectrique
            res.status(201).json(nouvelInstallationElectrique); // Retourner l'installationElectrique créé
        } catch (error) {
            handleError(res, error);
        }
    },

    // Obtenir un installationElectrique par ID
    getInstallationElectriqueById: async (req, res) => {

        try {
            const { id } = req.params;
            const installationElectrique = await InstallationElectrique.findByPk(id);
            if (!installationElectrique) {
                return res.status(404).json({ message: "InstallationElectrique non trouvé" });
            }
            res.status(200).json(installationElectrique);
        } catch (error) {
            handleError(res, error);
        }
    },

    // Mettre à jour un installationElectrique
    updateInstallationElectrique: async (req, res) => {
        try {
            const { designation, id_entreprise } = req.body;
            const installationElectrique = await InstallationElectrique.findByPk(req.params.id);
            if (!installationElectrique) {
                return res.status(404).json({ message: "InstallationElectrique non trouvé" });
            }
            await installationElectrique.update({ designation, id_entreprise });
            res.status(200).json(installationElectrique);
        } catch (error) {
            handleError(res, error);
        }
    },

    // Supprimer un installationElectrique
    deleteInstallationElectrique: async (req, res) => {
        try {
            const installationElectrique = await InstallationElectrique.findByPk(req.params.id);
            if (!installationElectrique) {
                return res.status(404).json({ message: "InstallationElectrique non trouvé" });
            }
            await installationElectrique.destroy();
            res.status(200).json({ message: "InstallationElectrique supprimé" });
        } catch (error) {
            handleError(res, error);
        }
    }
};

module.exports = installationElectriqueController;
