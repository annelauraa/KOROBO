const db           = require("../models");  // Importer les modèles Sequelize
const Intervention = db.Interventions;      // Récupérer le modèle des interventions

  // Fonction utilitaire pour gérer les erreurs
const handleError = (res, error) => {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
};

const interventionController = {
    getAllInterventions: async (req, res) => {
        try {
            const      interventions = await Intervention.findAll();  // Récupérer tous les interventions
            res.status(200).json(interventions);                      // Retourner les résultats en JSON
        } catch (error) {
            handleError(res, error);
        }
    },

      // Créer un nouvel intervention
    createIntervention: async (req, res) => {
        try {
            const      { date, description, statut, id_site, id_technicien } = req.body;                                       // Extraire les données du corps de la requête
            const      nouvelIntervention = await Intervention.create({ date, description, statut, id_site, id_technicien });  // Créer un intervention
            res.status(201).json(nouvelIntervention);                                                                          // Retourner l'intervention créé
        } catch (error) {
            handleError(res, error);
        }
    },

      // Obtenir un intervention par ID
    getInterventionById: async (req, res) => {

        try {
            const { id }       = req.params;
            const intervention = await Intervention.findByPk(id);
            if (!intervention) {
                return res.status(404).json({ message: "Intervention non trouvé" });
            }
            res.status(200).json(intervention);
        } catch (error) {
            handleError(res, error);
        }
    },

      // Mettre à jour un intervention
    updateIntervention: async (req, res) => {
        try {
            const { date, description, statut, id_site, id_technicien } = req.body;
            const intervention                                          = await Intervention.findByPk(req.params.id);
            if (!intervention) {
                return res.status(404).json({ message: "Intervention non trouvé" });
            }
            await intervention.update({ date, description, statut, id_site, id_technicien });
            res.status(200).json(intervention);
        } catch (error) {
            handleError(res, error);
        }
    },

      // Supprimer un intervention
    deleteIntervention: async (req, res) => {
        try {
            const intervention = await Intervention.findByPk(req.params.id);
            if (!intervention) {
                return res.status(404).json({ message: "Intervention non trouvé" });
            }
            await intervention.destroy();
            res.status(200).json({ message: "Intervention supprimé" });
        } catch (error) {
            handleError(res, error);
        }
    }
};

module.exports = interventionController;
