const express = require("express");
const router = express.Router();
const utilisateurController = require("../controllers/UtilisateurController");
const authMiddleware = require("../Middlewares/authMiddleware");
const roleMiddleware = require("../Middlewares/roleMiddleware");

// Définir les routes
router.get("/getall/:id_entreprise", authMiddleware, roleMiddleware(["admin"]), utilisateurController.getAllUtilisateurs);
router.get("/search/:index/:id_connected/:id_entreprise", authMiddleware, roleMiddleware(["admin"]), utilisateurController.getAllUtilisateurByIndex);
router.post("/", authMiddleware, roleMiddleware(["admin"]), utilisateurController.createUtilisateur);
router.get("/:id", authMiddleware, roleMiddleware(["admin"]), utilisateurController.getUtilisateurById);
router.put("/:id", authMiddleware, roleMiddleware(["admin"]), utilisateurController.updateUtilisateur);
router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), utilisateurController.deleteUtilisateur);

module.exports = router;
