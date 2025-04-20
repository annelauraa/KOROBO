const express              = require("express");
const router               = express.Router();
const entrepriseController = require("../controllers/EntrepriseController");
const authMiddleware       = require("../Middlewares/authMiddleware");
const roleMiddleware       = require("../Middlewares/roleMiddleware");

  // Définir les routes
router.get("/", authMiddleware, roleMiddleware(["admin"]), entrepriseController.getAllEntreprises);
router.get("/:id", authMiddleware, roleMiddleware(["admin"]), entrepriseController.getEntrepriseById);
router.get("/search/:index", authMiddleware, roleMiddleware(["admin"]), entrepriseController.getEntrepriseByIndex);
router.post("/", entrepriseController.createEntreprise);
router.put("/:id", authMiddleware, roleMiddleware(["admin"]), entrepriseController.updateEntreprise);
router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), entrepriseController.deleteEntreprise);

module.exports = router;
