const { Op }     = require("sequelize");
const db         = require("../models");  // Importer les modèles Sequelize
const Entreprise = db.Entreprises;        // Récupérer le modèle des entreprise

const bcrypt          = require('bcrypt');
const saltRounds      = 10;
let   hashed_password = '';

  // Fonction utilitaire pour gérer les erreurs
const handleError = (res, error) => {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
};

const entrepriseController = {
    getAllEntreprises: async (req, res) => {
        try {
            const      entreprises = await Entreprise.findAll();  // Récupérer tous les entreprises
            res.status(200).json(entreprises);                    // Retourner les résultats en JSON
        } catch (error) {
            handleError(res, error);
        }
    },

      // Créer un nouvel entreprise
    createEntreprise: async (req, res) => {
        try {
            const { nom, email, mot_de_passe, telephone, adresse, logo } = req.body;                  // Extraire les données du corps de la requête
            const nouvelEntreprise                                       = await Entreprise.create({
                nom,
                telephone,
                adresse,
                logo
            }); // Créer un entreprise

            const hashedPassword = await bcrypt.hash(mot_de_passe, saltRounds);

            const nouvelUtilisateur = await db.Utilisateurs.create({
                nom          : nom+' Admin',
                email        : email,
                mot_de_passe : hashedPassword,
                role         : 'admin',
                id_entreprise: nouvelEntreprise.id
            });

              /** Pour empecher de retourner le mot de passe */
            const userToReturn = { ...nouvelUtilisateur.dataValues };
            delete userToReturn.mot_de_passe;

            res.status(201).json({
                entreprise : nouvelEntreprise,
                utilisateur: nouvelUtilisateur
            });

        } catch (error) {
            handleError(res, error);
        }
    },

      // Obtenir un entreprise par ID
    getEntrepriseById: async (req, res) => {

        try {
            const { id }     = req.params;
            const entreprise = await Entreprise.findByPk(id);
            if (!entreprise) {
                return res.status(404).json({ message: "Entreprise non trouvé" });
            }
            res.status(200).json(entreprise);
        } catch (error) {
            handleError(res, error);
        }
    },

      // Rechercher une entreprise
    getEntrepriseByIndex: async (req, res) => {

        try {
            const { index }  = req.params;
            const searchTerm = `%${index}%`;

            const entreprise = await Entreprise.findAll({
                where: {
                    [Op.or]: [
                        { nom: { [Op.like]: searchTerm } },
                        { email: { [Op.like]: searchTerm } },
                        { telephone: { [Op.like]: searchTerm } },
                        { adresse: { [Op.like]: searchTerm } }
                    ]
                }
            });
            if (entreprise == []) {
                return res.status(404).json({ message: "Aucune Entreprise trouvée" });
            }
            res.status(200).json(entreprise);
        } catch (error) {
            handleError(res, error);
        }
    },

      // Mettre à jour un entreprise
    updateEntreprise: async (req, res) => {
        try {
            const { nom, email, telephone, adresse, logo } = req.body;
            const entreprise                               = await Entreprise.findByPk(req.params.id);
            if (!entreprise) {
                return res.status(404).json({ message: "Entreprise non trouvé" });
            }
            await entreprise.update({ nom, email, telephone, adresse, logo });
            res.status(200).json(entreprise);
        } catch (error) {
            handleError(res, error);
        }
    },

      // Supprimer un entreprise
    deleteEntreprise: async (req, res) => {
        try {
            const entreprise = await Entreprise.findByPk(req.params.id);
            if (!entreprise) {
                return res.status(404).json({ message: "Entreprise non trouvé" });
            }
            await entreprise.destroy();
            res.status(200).json({ message: "Entreprise supprimé" });
        } catch (error) {
            handleError(res, error);
        }
    }
};

module.exports = entrepriseController;
