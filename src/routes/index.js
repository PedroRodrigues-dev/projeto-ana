const userRoutes = require("./userRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_output.json");

swaggerFile.assert = { type: "json" };

const routes = (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

  app.use("/api", userRoutes);
};

module.exports = routes;
