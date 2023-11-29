const express = require("express");
const router = express.Router();
const {
  getAllMatches,
  getMatchById,
  createMatch,
  updateMatch,
  deleteMatch,
} = require("../controllers/MatchController");
const authenticateToken = require("../middlewares/auth");

router.get("/match", getAllMatches, () => {
  /* #swagger.tags = ['Match'] */
});
router.get("/match/:id", authenticateToken, getMatchById, () => {
  /* #swagger.tags = ['Match'] */
});
router.post("/match", authenticateToken, createMatch, () => {
  /* #swagger.tags = ['Match'] */
});
router.put("/match/:id", authenticateToken, updateMatch, () => {
  /* #swagger.tags = ['Match'] */
});
router.delete("/match/:id", authenticateToken, deleteMatch, () => {
  /* #swagger.tags = ['Match'] */
});

module.exports = router;
