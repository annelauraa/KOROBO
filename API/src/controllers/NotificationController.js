const db           = require("../models");  // Importer les modèles Sequelize
const Notification = db.Notifications;      // Récupérer le modèle des notifications

  // Fonction utilitaire pour gérer les erreurs
const handleError = (res, error) => {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
};

const notificationController = {
    getAllNotifications: async (req, res) => {
        try {
            const      notifications = await Notification.findAll();  // Récupérer tous les notifications
            res.status(200).json(notifications);                      // Retourner les résultats en JSON
        } catch (error) {
            handleError(res, error);
        }
    },

      // Créer un nouvel notification
    createNotification: async (req, res) => {
        try {
            const      { message, date, id_utilisateur, id_intervention } = req.body;                                       // Extraire les données du corps de la requête
            const      nouvelNotification = await Notification.create({ message, date, id_utilisateur, id_intervention });  // Créer un notification
            res.status(201).json(nouvelNotification);                                                                       // Retourner l'notification créé
        } catch (error) {
            handleError(res, error);
        }
    },

      // Obtenir un notification par ID
    getNotificationById: async (req, res) => {

        try {
            const { id }       = req.params;
            const notification = await Notification.findByPk(id);
            if (!notification) {
                return res.status(404).json({ message: "Notification non trouvé" });
            }
            res.status(200).json(notification);
        } catch (error) {
            handleError(res, error);
        }
    },

      // Mettre à jour un notification
    updateNotification: async (req, res) => {
        try {
            const { message, date, id_utilisateur, id_intervention } = req.body;
            const notification                                       = await Notification.findByPk(req.params.id);
            if (!notification) {
                return res.status(404).json({ message: "Notification non trouvé" });
            }
            await notification.update({ message, date, id_utilisateur, id_intervention });
            res.status(200).json(notification);
        } catch (error) {
            handleError(res, error);
        }
    },

      // Supprimer un notification
    deleteNotification: async (req, res) => {
        try {
            const notification = await Notification.findByPk(req.params.id);
            if (!notification) {
                return res.status(404).json({ message: "Notification non trouvé" });
            }
            await notification.destroy();
            res.status(200).json({ message: "Notification supprimé" });
        } catch (error) {
            handleError(res, error);
        }
    }
};

module.exports = notificationController;
