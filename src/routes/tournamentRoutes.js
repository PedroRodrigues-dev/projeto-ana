const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/auth");
const {
  getAllTournaments,
  getTournamentById,
  createTournament,
  updateTournament,
  deleteTournament,
} = require("../controllers/TournamentController");

router.get("/tournament", getAllTournaments);
router.get("/tournament/:id", authenticateToken, getTournamentById);
router.post("/tournament", authenticateToken, createTournament);
router.put("/tournament/:id", authenticateToken, updateTournament);
router.delete("/tournament/:id", authenticateToken, deleteTournament);

module.exports = router;
