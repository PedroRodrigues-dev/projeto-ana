const { DataTypes } = require("sequelize");
const { db } = require("../configs/database");

const LogError = db.define("LogError", {
  id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  error_message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  error_type: {
    type: DataTypes.STRING(255),
  },
  occurred_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = LogError;
