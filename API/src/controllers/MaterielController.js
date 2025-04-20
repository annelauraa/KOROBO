const db       = require("../models");  // Importer les modèles Sequelize
const Materiel = db.Materiels;          // Récupérer le modèle des materiels

  // Fonction utilitaire pour gérer les erreurs
const handleError = (res, error) => {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
};

const materielController = {
    getAllMateriels: async (req, res) => {
        try {
            const { id_entreprise } = req.params;
            const materiels         = await Materiel.findAll({
                where: {
                    id_entreprise: id_entreprise
                }
            }); // Récupérer tous les materiels
            res.status(200).json(materiels);  // Retourner les résultats en JSON
        } catch (error) {
            handleError(res, error);
        }
    },

      // Créer un nouvel materiel
    createMateriel: async (req, res) => {
        try {
            const      { type, marque, constructeur, id_entreprise } = req.body;                               // Extraire les données du corps de la requête
            const      nouvelMateriel = await Materiel.create({ type, marque, constructeur, id_entreprise });  // Créer un materiel
            res.status(201).json(nouvelMateriel);                                                              // Retourner l'materiel créé
        } catch (error) {
            handleError(res, error);
        }
    },

      // Obtenir un materiel par ID
    getMaterielById: async (req, res) => {

        try {
            const { id }   = req.params;
            const materiel = await Materiel.findByPk(id);
            if (!materiel) {
                return res.status(404).json({ message: "Materiel non trouvé" });
            }
            res.status(200).json(materiel);
        } catch (error) {
            handleError(res, error);
        }
    },

      // Mettre à jour un materiel
    updateMateriel: async (req, res) => {
        try {
            const { type, marque, constructeur } = req.body;
            const materiel                       = await Materiel.findByPk(req.params.id);
            if (!materiel) {
                return res.status(404).json({ message: "Materiel non trouvé" });
            }
            await materiel.update({ type, marque, constructeur });
            res.status(200).json(materiel);
        } catch (error) {
            handleError(res, error);
        }
    },

      // Supprimer un materiel
    deleteMateriel: async (req, res) => {
        try {
            const materiel = await Materiel.findByPk(req.params.id);
            if (!materiel) {
                return res.status(404).json({ message: "Materiel non trouvé" });
            }
            await materiel.destroy();
            res.status(200).json({ message: "Materiel supprimé" });
        } catch (error) {
            handleError(res, error);
        }
    }
};

module.exports = materielController;
