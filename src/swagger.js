const swaggerAutogen = require("swagger-autogen");

const outputFile = "./swagger_output.json";
const endpointsFile = ["../src/routes/userRoutes.js"];

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
