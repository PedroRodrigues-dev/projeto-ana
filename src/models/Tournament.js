const { DataTypes } = require("sequelize");
const { db } = require("../configs/database");

const Tournament = db.define("Tournament", {
  id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  tournament_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  game_id: {
    type: DataTypes.CHAR(36),
  },
  organizer_id: {
    type: DataTypes.CHAR(36),
  },
  tournament_number: {
    type: DataTypes.STRING(255),
  },
  tournament_password: {
    type: DataTypes.STRING(255),
  },
  start_date: {
    type: DataTypes.DATE,
  },
  end_date: {
    type: DataTypes.DATE,
  },
  tournament_format: {
    type: DataTypes.STRING(255),
  },
});

module.exports = Tournament;
