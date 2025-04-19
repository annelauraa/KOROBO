const app = require("./src/app");
const db = require("./src/models"); // Charge les modèles pour la synchronisation
require("dotenv").config();
const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
    console.log("Base de données synchronisée");
    app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
});
