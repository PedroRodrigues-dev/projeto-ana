const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/auth");
const {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
} = require("../controllers/GameController");

router.get("/game", authenticateToken, getAllGames, () => {
  /* #swagger.tags = ['Game'] */
});
router.get("/game/:id", authenticateToken, getGameById, () => {
  /* #swagger.tags = ['Game'] */
});
router.post("/game", authenticateToken, createGame, () => {
  /* #swagger.tags = ['Game'] */
});
router.put("/game/:id", authenticateToken, updateGame, () => {
  /* #swagger.tags = ['Game'] */
});
router.delete("/game/:id", authenticateToken, deleteGame, () => {
  /* #swagger.tags = ['Game'] */
});

module.exports = router;
