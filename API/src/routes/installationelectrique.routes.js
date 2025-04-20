const express                          = require("express");
const router                           = express.Router();
const installationElectriqueController = require("../controllers/InstallationElectriqueController");
const authMiddleware                   = require("../Middlewares/authMiddleware");
const roleMiddleware                   = require("../Middlewares/roleMiddleware");

  // Définir les routes
router.get("/all/:id_entreprise", authMiddleware, roleMiddleware(["admin"]), installationElectriqueController.getAllInstallationElectriques);
router.get("/:id", authMiddleware, roleMiddleware(["admin"]), installationElectriqueController.getInstallationElectriqueById);
router.post("/", authMiddleware, roleMiddleware(["admin"]), installationElectriqueController.createInstallationElectrique);
router.put("/:id", authMiddleware, roleMiddleware(["admin"]), installationElectriqueController.updateInstallationElectrique);
router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), installationElectriqueController.deleteInstallationElectrique);

module.exports = router;
