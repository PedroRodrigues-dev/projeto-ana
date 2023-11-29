const { DataTypes } = require("sequelize");
const { db } = require("../configs/database");

const MatchParticipant = db.define("MatchParticipant", {
  id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  match_id: {
    type: DataTypes.CHAR(36),
  },
  team_id: {
    type: DataTypes.CHAR(36),
  },
});

module.exports = MatchParticipant;
