const { DataTypes } = require("sequelize");
const { db } = require("../configs/database");

const Game = db.define("Game", {
  id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  game_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

module.exports = Game;
