const db = require("../models"); // Importer les modèles Sequelize
const MaterielSite = db.MaterielSites; // Récupérer le modèle des materielsites

// Fonction utilitaire pour gérer les erreurs
const handleError = (res, error) => {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
};

const materielsiteController = {
    getAllMaterielSites: async (req, res) => {
        try {
            const materielsites = await MaterielSite.findAll(); // Récupérer tous les materielsites
            res.status(200).json(materielsites); // Retourner les résultats en JSON
        } catch (error) {
            handleError(res, error);
        }
    },

    // Créer un nouvel materielsite
    createMaterielSite: async (req, res) => {
        try {
            const { id_site, id_materiel, quantite } = req.body; // Extraire les données du corps de la requête
            const nouvelMaterielSite = await MaterielSite.create({ id_site, id_materiel, quantite }); // Créer un materielsite
            res.status(201).json(nouvelMaterielSite); // Retourner l'materielsite créé
        } catch (error) {
            handleError(res, error);
        }
    },

    // Obtenir un materielsite par ID
    getMaterielSiteById: async (req, res) => {

        try {
            const { id } = req.params;
            const materielsite = await MaterielSite.findByPk(id);
            if (!materielsite) {
                return res.status(404).json({ message: "MaterielSite non trouvé" });
            }
            res.status(200).json(materielsite);
        } catch (error) {
            handleError(res, error);
        }
    },

    // Mettre à jour un materielsite
    updateMaterielSite: async (req, res) => {
        try {
            const { id_site, id_materiel, quantite, } = req.body;
            const materielsite = await MaterielSite.findByPk(req.params.id);
            if (!materielsite) {
                return res.status(404).json({ message: "MaterielSite non trouvé" });
            }
            await materielsite.update({ id_site, id_materiel, quantite, });
            res.status(200).json(materielsite);
        } catch (error) {
            handleError(res, error);
        }
    },

    // Supprimer un materielsite
    deleteMaterielSite: async (req, res) => {
        try {
            const materielsite = await MaterielSite.findByPk(req.params.id);
            if (!materielsite) {
                return res.status(404).json({ message: "MaterielSite non trouvé" });
            }
            await materielsite.destroy();
            res.status(200).json({ message: "MaterielSite supprimé" });
        } catch (error) {
            handleError(res, error);
        }
    }
};

module.exports = materielsiteController;
