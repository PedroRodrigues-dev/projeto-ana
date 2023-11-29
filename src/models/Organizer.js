const { DataTypes } = require("sequelize");
const { db } = require("../configs/database");

const Organizer = db.define("Organizer", {
  id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  organizer_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  contact_info: {
    type: DataTypes.STRING(255),
  },
});

module.exports = Organizer;
