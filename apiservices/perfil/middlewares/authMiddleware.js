const authMiddleware = (req, res, next) => {
  const tokenRecibido = req.headers.authorization;
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
