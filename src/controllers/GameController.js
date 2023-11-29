const Game = require("../models");

const getAllGames = async (req, res) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getGameById = async (req, res) => {
  const { id } = req.params;
  try {
    const game = await Game.findByPk(id);
    if (game) {
      res.json(game);
    } else {
      res.status(404).json({ message: "Game not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createGame = async (req, res) => {
  const { game_name } = req.body;
  try {
    const game = await Game.create({ game_name });
    res.status(201).json(game);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateGame = async (req, res) => {
  const { id } = req.params;
  const { game_name } = req.body;
  try {
    const game = await Game.findByPk(id);
    if (game) {
      game.game_name = game_name;
      await game.save();
      res.json(game);
    } else {
      res.status(404).json({ message: "Game not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteGame = async (req, res) => {
  const { id } = req.params;
  try {
    const game = await Game.findByPk(id);
    if (game) {
      await game.destroy();
      res.json({ message: "Game deleted successfully" });
    } else {
      res.status(404).json({ message: "Game not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
};
