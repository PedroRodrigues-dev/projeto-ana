const express = require("express");
const router = express.Router();
const {
  getAllLogErrors,
  getLogErrorById,
  createLogError,
  updateLogError,
  deleteLogError,
} = require("../controllers/LogErrorController");
const { authenticateToken } = require("../middlewares/auth");

router.get("/logError", authenticateToken, getAllLogErrors, () => {
  /* #swagger.tags = ['LogError'] */
});
router.get("/logError/:id", authenticateToken, getLogErrorById, () => {
  /* #swagger.tags = ['LogError'] */
});
router.post("/logError", authenticateToken, createLogError, () => {
  /* #swagger.tags = ['LogError'] */
});
router.put("/logError/:id", authenticateToken, updateLogError, () => {
  /* #swagger.tags = ['LogError'] */
});
router.delete("/logError/:id", authenticateToken, deleteLogError, () => {
  /* #swagger.tags = ['LogError'] */
});

module.exports = router;
