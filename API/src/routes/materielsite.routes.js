const express = require("express");
const router = express.Router();
const materielsiteController = require("../controllers/MaterielsiteController");
const authMiddleware = require("../Middlewares/authMiddleware");
const roleMiddleware = require("../Middlewares/roleMiddleware");
// Définir les routes
router.get("/", authMiddleware, roleMiddleware(["admin"]), materielsiteController.getAllMaterielSites);
router.post("/", authMiddleware, roleMiddleware(["admin"]), materielsiteController.createMaterielSite);
router.get("/:id", authMiddleware, roleMiddleware(["admin"]), materielsiteController.getMaterielSiteById);
router.put("/:id", authMiddleware, roleMiddleware(["admin"]), materielsiteController.updateMaterielSite);
router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), materielsiteController.deleteMaterielSite);

module.exports = router;
