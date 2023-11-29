const { DataTypes } = require("sequelize");
const { db } = require("../configs/database");

const Match = db.define("Match", {
  id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  tournament_id: {
    type: DataTypes.CHAR(36),
  },
  round_number: {
    type: DataTypes.INTEGER,
  },
  team1_id: {
    type: DataTypes.CHAR(36),
  },
  team2_id: {
    type: DataTypes.CHAR(36),
  },
  match_date: {
    type: DataTypes.DATE,
  },
  winner_id: {
    type: DataTypes.CHAR(36),
  },
});

module.exports = Match;
