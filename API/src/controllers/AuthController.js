const bcrypt         = require("bcryptjs");
const jwt            = require("jsonwebtoken");
const db             = require("../models");
const Utilisateur    = db.Utilisateurs;
const Entreprises    = db.Entreprises;
const authController = {
    register: async (req, res) => {
        try {
            const { nom, email, mot_de_passe, role, id_entreprise } = req.body;

            const entreprise = await Entreprises.findByPk(id_entreprise);
            if (!entreprise) {
                throw new Error('L\'entreprise avec cet ID n\'existe pas.');
            }

            const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

            const newUser = await Utilisateur.create({
                nom,
                email,
                mot_de_passe: hashedPassword,
                role,
                id_entreprise
            });

            res.status(201).json({ message: "Utilisateur créé", userId: newUser.id_utilisateur });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erreur lors de l'inscription" });
        }
    },

    login: async (req, res) => {
        try {
            const { email, mot_de_passe } = req.body;
            const user                    = await Utilisateur.findOne({ where: { email } });

            if (!user) {
                return res.status(400).json({ error: "Utilisateur non trouvé" });
            }

            const entreprise = await Entreprises.findByPk(user.id_entreprise);
            if (!entreprise) {
                return res.status(400).json({ error: "Entreprise non trouvée" });
            }

            if (!entreprise.isVerified) {
                return res.status(401).json({ error: "Veuillez activer votre compte pour vous connecter" });
            }

            const isMatch = await bcrypt.compare(mot_de_passe, user.mot_de_passe);

            if (!isMatch) {
                return res.status(400).json({ error: "Mot de passe incorrect" });
            }

            const token = jwt.sign(
                { id: user.id_utilisateur, role: user.role, email: user.email, nom: user.nom, id_entreprise: user.id_entreprise },
                process.env.JWT_SECRET,
                { expiresIn: "5m" }
            );

            res.json({ 
                token
            });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la connexion" });
        }
    }

};

module.exports = authController;