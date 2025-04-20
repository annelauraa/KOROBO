const express              = require("express");
const router               = express.Router();
const contratSAVController = require("../controllers/ContratSAVController");
const authMiddleware       = require("../Middlewares/authMiddleware");
const roleMiddleware       = require("../Middlewares/roleMiddleware");

  // Définir les routes
router.get("/", authMiddleware, roleMiddleware(["admin"]), contratSAVController.getAllContratSAVs);
router.get("/:id", authMiddleware, roleMiddleware(["admin"]), contratSAVController.getContratSAVById);
router.post("/", authMiddleware, roleMiddleware(["admin"]), contratSAVController.createContratSAV);
router.put("/:id", authMiddleware, roleMiddleware(["admin"]), contratSAVController.updateContratSAV);
router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), contratSAVController.deleteContratSAV);

module.exports = router;
