const express        = require("express");
const router         = express.Router();
const siteController = require("../controllers/SiteController");
const authMiddleware = require("../Middlewares/authMiddleware");
const roleMiddleware = require("../Middlewares/roleMiddleware");

  // Définir les routes
router.get("/all/:id_entreprise", authMiddleware, roleMiddleware(["admin"]), siteController.getAllSites);
router.post("/", authMiddleware, roleMiddleware(["admin"]), siteController.createSite);
router.get("/:id", authMiddleware, roleMiddleware(["admin"]), siteController.getSiteById);
router.put("/:id", authMiddleware, roleMiddleware(["admin"]), siteController.updateSite);
router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), siteController.deleteSite);

module.exports = router;
