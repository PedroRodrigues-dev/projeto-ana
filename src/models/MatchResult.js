const { DataTypes } = require("sequelize");
const { db } = require("../configs/database");

const MatchResult = db.define("MatchResult", {
  id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  match_id: {
    type: DataTypes.CHAR(36),
  },
  team1_id: {
    type: DataTypes.CHAR(36),
  },
  team2_id: {
    type: DataTypes.CHAR(36),
  },
  team1_score: {
    type: DataTypes.INTEGER,
  },
  team2_score: {
    type: DataTypes.INTEGER,
  },
});

module.exports = MatchResult;
