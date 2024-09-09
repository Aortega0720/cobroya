const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  pass: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: true
});

module.exports = User;

