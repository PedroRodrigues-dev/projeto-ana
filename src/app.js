const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { db } = require("./configs/database");
const routes = require("./routes");

const app = express();

db.sync()
  .then(() => {
    console.log("All models were synchronized successfully.");
  })
  .catch((error) => {
    console.error("Unable to synchronize models:", error);
  });

app.use(cors());
app.use(helmet());
app.use(express.json());

routes(app);

module.exports = app;
