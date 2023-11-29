const userRoutes = require("./userRoutes");
const teamRoutes = require("./teamRoutes");
const gameRoutes = require("./gameRoutes");
const tournamentRoutes = require("./tournamentRoutes");
const tournamentParticipantRoutes = require("./tournamentParticipantRoutes");
const matchRoutes = require("./matchRoutes");
const organizerRoutes = require("./organizerRoutes");
const logErrorRoutes = require("./logErrorRoutes");
const matchResultRoutes = require("./matchResultRoutes");
const matchParticipantRoutes = require("./matchParticipantRoutes");
const notificationRoutes = require("./notificationRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_output.json");

swaggerFile.assert = { type: "json" };

const routes = (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

  app.use("/api", userRoutes);
  app.use("/api", teamRoutes);
  app.use("/api", gameRoutes);
  app.use("/api", tournamentRoutes);
  app.use("/api", tournamentParticipantRoutes);
  app.use("/api", matchRoutes);
  app.use("/api", organizerRoutes);
  app.use("/api", logErrorRoutes);
  app.use("/api", matchResultRoutes);
  app.use("/api", matchParticipantRoutes);
  app.use("/api", notificationRoutes);
};

module.exports = routes;
