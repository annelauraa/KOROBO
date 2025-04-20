const express            = require("express");
const router             = express.Router();
const materielController = require("../controllers/MaterielController");
const authMiddleware     = require("../Middlewares/authMiddleware");
const roleMiddleware     = require("../Middlewares/roleMiddleware");
  // Définir les routes
router.get("/all/:id_entreprise", authMiddleware, roleMiddleware(["admin"]), materielController.getAllMateriels);
router.post("/", authMiddleware, roleMiddleware(["admin"]), materielController.createMateriel);
router.get("/:id", authMiddleware, roleMiddleware(["admin"]), materielController.getMaterielById);
router.put("/:id", authMiddleware, roleMiddleware(["admin"]), materielController.updateMateriel);
router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), materielController.deleteMateriel);

module.exports = router;
