const express = require("express");
const router = express.Router();
const {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/TeamController");
const { authenticateToken } = require("../middlewares/auth");

router.get("/team", authenticateToken, getAllTeams, () => {
  /* #swagger.tags = ['Team'] */
});
router.get("/team/:id", authenticateToken, getTeamById, () => {
  /* #swagger.tags = ['Team'] */
});
router.post("/team", authenticateToken, createTeam, () => {
  /* #swagger.tags = ['Team'] */
});
router.put("/team/:id", authenticateToken, updateTeam, () => {
  /* #swagger.tags = ['Team'] */
});
router.delete("/team/:id", authenticateToken, deleteTeam, () => {
  /* #swagger.tags = ['Team'] */
});

module.exports = router;
