const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const tokenRecibido = req.headers.authorization;
  
  const secretKey = "123456";
  jwt.verify(tokenRecibido, secretKey, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: "No autorizado" });
      return;
    }
    console.log("Token verificado con éxito. Datos:", decoded);
    next();
  });
};

module.exports = authMiddleware;
