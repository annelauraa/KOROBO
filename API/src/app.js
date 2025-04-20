const express = require("express");
const cors    = require("cors");
const helmet  = require("helmet");
const dotenv  = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());  // Pour lire les JSON envoyés

  // require routes
const utilisateurRouters  = require('./routes/utillisateurs.routes');
const entrepriseRouters   = require('./routes/entreprise.routes');
const siteRouters         = require('./routes/sites.routes');
const interventionRouters = require('./routes/intervention.routes');
const materielRouters     = require('./routes/materiel.routes');
const materielsiteRouters = require('./routes/materielsite.routes');
const notificationRouters = require('./routes/notification.routes');
const authRouters         = require("./routes/auth.routes");
  // Ajouter les routes à l'application
app.use("/api/auth", authRouters);
app.use("/api/utilisateurs", utilisateurRouters);
app.use("/api/entreprises", entrepriseRouters);
app.use("/api/sites", siteRouters);
app.use("/api/interventions", interventionRouters);
app.use("/api/materiels", materielRouters);
app.use("/api/materielsites", materielsiteRouters);
app.use("/api/notifications", notificationRouters);
app.use("/api/installationelectrique", materielsiteRouters);
app.use("/api/contratsav", notificationRouters);
app.use("/api/typeinstallation", notificationRouters);

module.exports = app;
