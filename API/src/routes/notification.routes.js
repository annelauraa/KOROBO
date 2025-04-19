const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/NotificationController");

// Définir les routes
router.get("/", notificationController.getAllNotifications);
router.post("/", notificationController.createNotification);
router.get("/:id", notificationController.getNotificationById);
router.put("/:id", notificationController.updateNotification);
router.delete("/:id", notificationController.deleteNotification);

module.exports = router;
