const express = require('express');
const app = express();

const profileRoutes = require('./apiservices/perfil/routes/profileRoutes');
const userRoutes = require('./apiservices/user/routes/userRoutes');

require('dotenv').config();
const sequelize = require('./apiservices/perfil/models/index');

app.use(express.json());
app.use('/api', profileRoutes);
app.use('/api', userRoutes);

sequelize.sync()
  .then(() => {
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Error al sincronizar la base de datos:', err));
