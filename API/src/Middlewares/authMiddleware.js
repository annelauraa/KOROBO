const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Accès refusé" });
    }

    try {
        const tokenWithoutBearer = token.replace("Bearer ", "").trim();
        const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);

        res.status(403).json({ message: "Token invalide" });
    }

};

module.exports = authMiddleware;
