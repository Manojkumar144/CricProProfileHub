const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const PlayerProfile = sequelize.define('playerProfiles', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateOfBirth: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  photo: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  birthPlace: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  career: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  matches: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  fifties: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  centuries: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  wickets: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  average: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = PlayerProfile;
