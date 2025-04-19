const db = require("../models"); // Importer les modèles Sequelize
const ContratSAV = db.ContratSAV; // Récupérer le modèle des contratSAV

// Fonction utilitaire pour gérer les erreurs
const handleError = (res, error) => {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
};

const ContratSAVController = {
    getAllContratSAVs: async (req, res) => {
        try {
            const contratSAV = await ContratSAV.findAll();
            res.status(200).json(contratSAV); // Retourner les résultats en JSON
        } catch (error) {
            handleError(res, error);
        }
    },

    // Créer un nouvel contratSAV
    createContratSAV: async (req, res) => {
        try {
            const { designation, description } = req.body; // Extraire les données du corps de la requête
            const nouvelContratSAV = await ContratSAV.create({ designation, description }); // Créer un contratSAV
            res.status(201).json(nouvelContratSAV); // Retourner le contratSAV créé
        } catch (error) {
            handleError(res, error);
        }
    },

    // Obtenir un contratSAV par ID
    getContratSAVById: async (req, res) => {

        try {
            const { id } = req.params;
            const contratSAV = await ContratSAV.findByPk(id);
            if (!contratSAV) {
                return res.status(404).json({ message: "ContratSAV non trouvé" });
            }
            res.status(200).json(contratSAV);
        } catch (error) {
            handleError(res, error);
        }
    },

    // Mettre à jour un contratSAV
    updateContratSAV: async (req, res) => {
        try {
            const { designation, description } = req.body;
            const contratSAV = await ContratSAV.findByPk(req.params.id);
            if (!contratSAV) {
                return res.status(404).json({ message: "ContratSAV non trouvé" });
            }
            await contratSAV.update({ designation, description });
            res.status(200).json(contratSAV);
        } catch (error) {
            handleError(res, error);
        }
    },

    // Supprimer un contratSAV
    deleteContratSAV: async (req, res) => {
        try {
            const contratSAV = await ContratSAV.findByPk(req.params.id);
            if (!contratSAV) {
                return res.status(404).json({ message: "ContratSAV non trouvé" });
            }
            await contratSAV.destroy();
            res.status(200).json({ message: "ContratSAV supprimé" });
        } catch (error) {
            handleError(res, error);
        }
    }
};

module.exports = ContratSAVController;
