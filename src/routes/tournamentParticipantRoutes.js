const express = require("express");
const router = express.Router();
const {
  getAllTournamentParticipants,
  getTournamentParticipantById,
  createTournamentParticipant,
  updateTournamentParticipant,
  deleteTournamentParticipant,
} = require("../controllers/TournamentParticipantController");
const authenticateToken = require("../middlewares/auth");

router.get("/tournamentParticipant", getAllTournamentParticipants, () => {
  /* #swagger.tags = ['TournamentParticipant'] */
});
router.get(
  "/tournamentParticipant/:id",
  authenticateToken,
  getTournamentParticipantById,
  () => {
    /* #swagger.tags = ['TournamentParticipant'] */
  }
);
router.post(
  "/tournamentParticipant",
  authenticateToken,
  createTournamentParticipant,
  () => {
    /* #swagger.tags = ['TournamentParticipant'] */
  }
);
router.put(
  "/tournamentParticipant/:id",
  authenticateToken,
  updateTournamentParticipant,
  () => {
    /* #swagger.tags = ['TournamentParticipant'] */
  }
);
router.delete(
  "/tournamentParticipant/:id",
  authenticateToken,
  deleteTournamentParticipant,
  () => {
    /* #swagger.tags = ['TournamentParticipant'] */
  }
);

module.exports = router;
