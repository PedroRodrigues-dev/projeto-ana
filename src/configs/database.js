const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const syncDatabase = () => {
  db.authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });

  db.sync()
    .then(() => {
      console.log("All models were synchronized successfully.");
    })
    .catch((error) => {
      console.error("Unable to synchronize models:", error);
    });
};

module.exports = syncDatabase;
