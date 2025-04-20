const express                = require("express");
const router                 = express.Router();
const interventionController = require("../controllers/InterventionController");
const authMiddleware         = require("../Middlewares/authMiddleware");
const roleMiddleware         = require("../Middlewares/roleMiddleware");

  // Définir les routes
router.get("/", authMiddleware, roleMiddleware(["admin"]), interventionController.getAllInterventions);
router.post("/", authMiddleware, roleMiddleware(["admin"]), interventionController.createIntervention);
router.get("/:id", authMiddleware, roleMiddleware(["admin"]), interventionController.getInterventionById);
router.put("/:id", authMiddleware, roleMiddleware(["admin"]), interventionController.updateIntervention);
router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), interventionController.deleteIntervention);

module.exports = router;
