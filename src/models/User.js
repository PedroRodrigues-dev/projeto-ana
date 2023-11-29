const { DataTypes } = require("sequelize");
const { db } = require("../configs/database");

const User = db.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  nickname_in_game: {
    type: DataTypes.STRING,
  },
  favorite_platform: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
