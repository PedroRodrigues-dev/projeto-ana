const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes");
const syncDatabase = require("./configs/database");

const app = express();

syncDatabase();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api", routes);

module.exports = app;
