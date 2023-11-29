// teamModel.js
const { DataTypes } = require("sequelize");
const { db } = require("../configs/database");

const Team = db.define("Team", {
  id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  team_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  captain_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Team;
