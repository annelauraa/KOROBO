const { Op, Sequelize } = require("sequelize");
const db                = require("../models");  // Importer les modèles Sequelize
const Utilisateur       = db.Utilisateurs;       // Récupérer le modèle des utilisateurs
const Entreprise        = db.Entreprises;        // Récupérer le modèle des entreprises

  // Fonction utilitaire pour gérer les erreurs
const handleError = (res, error) => {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
};

const utilisateurController = {
    getAllUtilisateurs: async (req, res) => {
        try {
            const { id_entreprise } = req.params;
            const utilisateurs      = await Utilisateur.findAll({
                attributes: [
                    'id',
                    'nom',
                    'email',
                      // [Sequelize.col('Entreprises.nom'), 'entreprise_nom'] // Ajoute une colonne de l'entreprise
                ],
                where: {
                    id_entreprise: id_entreprise
                },
                include: [
                    {
                        model: Entreprise,
                        as   : 'entreprise'
                    }
                ]
            });
            res.status(200).json(utilisateurs);
        } catch (error) {
            handleError(res, error);
        }
    },

      // Créer un nouvel utilisateur
    createUtilisateur: async (req, res) => {
        try {
            const      { nom, email, mot_de_passe, role, id_entreprise } = req.body;                                     // Extraire les données du corps de la requête
            const      nouvelUtilisateur = await Utilisateur.create({ nom, email, mot_de_passe, role, id_entreprise });  // Créer un utilisateur
            res.status(201).json(nouvelUtilisateur);                                                                     // Retourner l'utilisateur créé
        } catch (error) {
            handleError(res, error);
        }
    },

      // Obtenir un utilisateur par ID
    getUtilisateurById: async (req, res) => {

        try {
            const { id }      = req.params;
            const utilisateur = await Utilisateur.findByPk(id);
            if (!utilisateur) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }
            res.status(200).json(utilisateur);
        } catch (error) {
            handleError(res, error);
        }
    },
      // lister les techniciens disponnibles
    getAllUtilisateurByIndex: async (req, res) => {

        try {
            const { index, id_connected, id_entreprise } = req.params;
            const searchTerm                             = `%${index}%`;

            const utilisateur = await Utilisateur.findAll({
                attributes: ['id', 'nom', 'email'],
                where     : {
                    [Op.or]: [
                        { nom: { [Op.like]: searchTerm } },
                        { email: { [Op.like]: searchTerm } },
                    ],
                    [Op.and]: [
                        { id: { [Op.not]: id_connected } }
                    ],
                    [Op.and]: [
                        { id_entreprise: id_entreprise }
                    ],
                }
            });
            if (utilisateur == []) {
                return res.status(404).json({ message: "Aucun technicien trouvée" });
            }
            res.status(200).json(utilisateur);
        } catch (error) {
            handleError(res, error);
        }
    },

      //RechercheR LES techniciens  par disponnibilité





      // Mettre à jour un utilisateur
    updateUtilisateur: async (req, res) => {
        try {
            const { nom, email, mot_de_passe, role } = req.body;
            const utilisateur                        = await Utilisateur.findByPk(req.params.id);
            if (!utilisateur) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }
            await utilisateur.update({ nom, email, mot_de_passe, role });
            res.status(200).json(utilisateur);
        } catch (error) {
            handleError(res, error);
        }
    },

      // Supprimer un utilisateur
    deleteUtilisateur: async (req, res) => {
        try {
            const utilisateur = await Utilisateur.findByPk(req.params.id);
            if (!utilisateur) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }
            await utilisateur.destroy();
            res.status(200).json({ message: "Utilisateur supprimé" });
        } catch (error) {
            handleError(res, error);
        }
    }
};

module.exports = utilisateurController;
