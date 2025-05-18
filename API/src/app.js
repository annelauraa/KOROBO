const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Configuration CORS
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://korobo.onrender.com",
    "http://192.168.16.103:3000",
    "https://korobo-annelauraas-projects.vercel.app"
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
};

// Middlewares globaux
app.use(cors(corsOptions));

// Optionnel : désactive certaines protections de Helmet si nécessaire pour les assets externes
app.use(
  helmet({
    crossOriginResourcePolicy: false
  })
);

// Pour parser le JSON et les formulaires
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logs des headers pour débogage
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  console.log("Origin:", req.headers.origin);
  console.log("Authorization:", req.headers.authorization || "Aucun token");
  next();
});

// Import des routes
const utilisateurRouters = require('./routes/utillisateurs.routes');
const entrepriseRouters = require('./routes/entreprise.routes');
const siteRouters = require('./routes/sites.routes');
const interventionRouters = require('./routes/intervention.routes');
const materielRouters = require('./routes/materiel.routes');
const materielsiteRouters = require('./routes/materielsite.routes');
const notificationRouters = require('./routes/notification.routes');
const authRouters = require("./routes/auth.routes");

// Association des routes à leurs préfixes
app.use("/api/auth", authRouters);
app.use("/api/utilisateurs", utilisateurRouters);
app.use("/api/entreprises", entrepriseRouters);
app.use("/api/sites", siteRouters);
app.use("/api/interventions", interventionRouters);
app.use("/api/materiels", materielRouters);
app.use("/api/materielsites", materielsiteRouters);
app.use("/api/notifications", notificationRouters);

// Routes alternatives (si tu les gardes comme ça)
app.use("/api/installationelectrique", materielsiteRouters);
app.use("/api/contratsav", notificationRouters);
app.use("/api/typeinstallation", notificationRouters);

module.exports = app;
