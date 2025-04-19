const db = require("../models"); // Importer les modèles Sequelize
const TypeInstallation = db.TypeInstallation; // Récupérer le modèle des typeInstallations

// Fonction utilitaire pour gérer les erreurs
const handleError = (res, error) => {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
};

const typeInstallationController = {
    getAllTypeInstallations: async (req, res) => {
        try {
            const { id_entreprise } = req.params;
            const typeInstallations = await TypeInstallation.findAll({
                where: { id_entreprise: id_entreprise }
            }); // Récupérer tous les typeInstallations
            res.status(200).json(typeInstallations); // Retourner les résultats en JSON
        } catch (error) {
            handleError(res, error);
        }
    },

    // Créer un nouvel typeInstallation
    createTypeInstallation: async (req, res) => {
        try {
            const { designation, id_entreprise } = req.body; // Extraire les données du corps de la requête
            const nouvelTypeInstallation = await TypeInstallation.create({ designation, id_entreprise }); // Créer un typeInstallation
            res.status(201).json(nouvelTypeInstallation); // Retourner l'typeInstallation créé
        } catch (error) {
            handleError(res, error);
        }
    },

    // Obtenir un typeInstallation par ID
    getTypeInstallationById: async (req, res) => {

        try {
            const { id } = req.params;
            const typeInstallation = await TypeInstallation.findByPk(id);
            if (!typeInstallation) {
                return res.status(404).json({ message: "TypeInstallation non trouvé" });
            }
            res.status(200).json(typeInstallation);
        } catch (error) {
            handleError(res, error);
        }
    },

    // Mettre à jour un typeInstallation
    updateTypeInstallation: async (req, res) => {
        try {
            const { designation, id_entreprise } = req.body;
            const typeInstallation = await TypeInstallation.findByPk(req.params.id);
            if (!typeInstallation) {
                return res.status(404).json({ message: "TypeInstallation non trouvé" });
            }
            await typeInstallation.update({ designation, id_entreprise });
            res.status(200).json(typeInstallation);
        } catch (error) {
            handleError(res, error);
        }
    },

    // Supprimer un typeInstallation
    deleteTypeInstallation: async (req, res) => {
        try {
            const typeInstallation = await TypeInstallation.findByPk(req.params.id);
            if (!typeInstallation) {
                return res.status(404).json({ message: "TypeInstallation non trouvé" });
            }
            await typeInstallation.destroy();
            res.status(200).json({ message: "TypeInstallation supprimé" });
        } catch (error) {
            handleError(res, error);
        }
    }
};

module.exports = typeInstallationController;
