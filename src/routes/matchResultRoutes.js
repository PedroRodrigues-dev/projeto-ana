const express = require("express");
const router = express.Router();
const {
  getAllMatchResults,
  getMatchResultById,
  createMatchResult,
  updateMatchResult,
  deleteMatchResult,
} = require("../controllers/MatchResultController");
const { authenticateToken } = require("../middlewares/auth");

router.get("/matchResults", getAllMatchResults, () => {
  /* #swagger.tags = ['MatchResult'] */
});
router.get("/matchResults/:id", authenticateToken, getMatchResultById, () => {
  /* #swagger.tags = ['MatchResult'] */
});
router.post("/matchResults", authenticateToken, createMatchResult, () => {
  /* #swagger.tags = ['MatchResult'] */
});
router.put("/matchResults/:id", authenticateToken, updateMatchResult, () => {
  /* #swagger.tags = ['MatchResult'] */
});
router.delete("/matchResults/:id", authenticateToken, deleteMatchResult, () => {
  /* #swagger.tags = ['MatchResult'] */
});

module.exports = router;
