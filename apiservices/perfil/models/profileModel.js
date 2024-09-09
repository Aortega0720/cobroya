const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Profile = sequelize.define('Profile', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
}, {
  timestamps: true
});

module.exports = Profile;

