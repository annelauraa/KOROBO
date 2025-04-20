const express                    = require("express");
const router                     = express.Router();
const typeInstallationController = require("../controllers/TypeInstallationController");
const authMiddleware             = require("../Middlewares/authMiddleware");
const roleMiddleware             = require("../Middlewares/roleMiddleware");

  // Définir les routes
router.get("/all/:id_entreprise", authMiddleware, roleMiddleware(["admin"]), typeInstallationController.getAllTypeInstallations);
router.get("/:id", authMiddleware, roleMiddleware(["admin"]), typeInstallationController.getTypeInstallationById);
router.post("/", authMiddleware, roleMiddleware(["admin"]), typeInstallationController.createTypeInstallation);
router.put("/:id", authMiddleware, roleMiddleware(["admin"]), typeInstallationController.updateTypeInstallation);
router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), typeInstallationController.deleteTypeInstallation);

module.exports = router;
