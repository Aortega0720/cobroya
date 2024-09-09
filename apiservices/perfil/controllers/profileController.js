const profileService = require('../services/profileService');

class ProfileController {
  async create(req, res) {
    try {
      console.log("Entro al crear perfil",req.body);
      const profile = await profileService.createProfile(req.body);
      res.status(201).json(profile);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear perfil', error });
    }
  }

  async getById(req, res) {
    try {
      const profile = await profileService.getProfileById(req.params.id);
      if (profile) {
        res.json(profile);
      } else {
        res.status(404).json({ message: 'Perfil no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener perfil', error });
    }
  }

  async update(req, res) {
    try {
      const [updated] = await profileService.updateProfile(req.params.id, req.body);
      if (updated) {
        res.json({ message: 'Perfil actualizado' });
      } else {
        res.status(404).json({ message: 'Perfil no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar perfil', error });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await profileService.deleteProfile(req.params.id);
      if (deleted) {
        res.json({ message: 'Perfil eliminado' });
      } else {
        res.status(404).json({ message: 'Perfil no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar perfil', error });
    }
  }
}

module.exports = new ProfileController();
