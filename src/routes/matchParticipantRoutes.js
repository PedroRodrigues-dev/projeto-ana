const express = require("express");
const router = express.Router();
const {
  getAllMatchParticipants,
  getMatchParticipantById,
  createMatchParticipant,
  updateMatchParticipant,
  deleteMatchParticipant,
} = require("../controllers/MatchParticipantController");
const authenticateToken = require("../middlewares/auth");

router.get("/matchParticipant", getAllMatchParticipants, () => {
  /* #swagger.tags = ['MatchParticipant'] */
});
router.get(
  "/matchParticipant/:id",
  authenticateToken,
  getMatchParticipantById,
  () => {
    /* #swagger.tags = ['MatchParticipant'] */
  }
);
router.post(
  "/matchParticipant",
  authenticateToken,
  createMatchParticipant,
  () => {
    /* #swagger.tags = ['MatchParticipant'] */
  }
);
router.put(
  "/matchParticipant/:id",
  authenticateToken,
  updateMatchParticipant,
  () => {
    /* #swagger.tags = ['MatchParticipant'] */
  }
);
router.delete(
  "/matchParticipant/:id",
  authenticateToken,
  deleteMatchParticipant,
  () => {
    /* #swagger.tags = ['MatchParticipant'] */
  }
);

module.exports = router;
