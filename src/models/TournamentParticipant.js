const { DataTypes } = require("sequelize");
const { db } = require("../configs/database");

const TournamentParticipant = db.define("TournamentParticipant", {
  id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  tournament_id: {
    type: DataTypes.CHAR(36),
  },
  team_id: {
    type: DataTypes.CHAR(36),
  },
});

module.exports = TournamentParticipant;
