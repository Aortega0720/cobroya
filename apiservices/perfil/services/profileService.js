const Profile = require('../models/profileModel');

class ProfileService {
  async createProfile(data) {
    return Profile.create(data);
  }

  async getProfileById(id) {
    return Profile.findByPk(id);
  }

  async updateProfile(id, data) {
    return Profile.update(data, { where: { id } });
  }

  async deleteProfile(id) {
    return Profile.destroy({ where: { id } });
  }
}

module.exports = new ProfileService();
