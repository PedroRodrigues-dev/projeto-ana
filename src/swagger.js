const swaggerAutogen = require("swagger-autogen");

const outputFile = "./swagger_output.json";
const endpointsFile = [
  "../src/routes/gameRoutes.js",
  "../src/routes/logErrorRoutes.js",
  "../src/routes/matchParticipantRoutes.js",
  "../src/routes/matchResultRoutes.js",
  "../src/routes/matchRoutes.js",
  "../src/routes/notificationRoutes.js",
  "../src/routes/organizerRoutes.js",
  "../src/routes/teamRoutes.js",
  "../src/routes/tournamentParticipantRoutes.js",
  "../src/routes/tournamentRoutes.js",
  "../src/routes/userRoutes.js",
];

const doc = {
  info: {
    version: "1.0.0",
    title: "backend",
    description: "",
  },
  host: "localhost:3000",
  basePath: "/api",
  consumes: ["application/json"],
  produces: ["application/json"],
};

swaggerAutogen(outputFile, endpointsFile, doc);
