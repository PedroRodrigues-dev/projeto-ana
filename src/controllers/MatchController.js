const Match = require("../models");

const getAllMatches = async (req, res) => {
  try {
    const matches = await Match.findAll();
    res.json(matches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getMatchById = async (req, res) => {
  const { id } = req.params;
  try {
    const match = await Match.findByPk(id);
    if (match) {
      res.json(match);
    } else {
      res.status(404).json({ message: "Match not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createMatch = async (req, res) => {
  const {
    tournament_id,
    round_number,
    team1_id,
    team2_id,
    match_date,
    winner_id,
  } = req.body;
  try {
    const match = await Match.create({
      tournament_id,
      round_number,
      team1_id,
      team2_id,
      match_date,
      winner_id,
    });
    res.status(201).json(match);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateMatch = async (req, res) => {
  const { id } = req.params;
  const {
    tournament_id,
    round_number,
    team1_id,
    team2_id,
    match_date,
    winner_id,
  } = req.body;
  try {
    const match = await Match.findByPk(id);
    if (match) {
      match.tournament_id = tournament_id;
      match.round_number = round_number;
      match.team1_id = team1_id;
      match.team2_id = team2_id;
      match.match_date = match_date;
      match.winner_id = winner_id;
      await match.save();
      res.json(match);
    } else {
      res.status(404).json({ message: "Match not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteMatch = async (req, res) => {
  const { id } = req.params;
  try {
    const match = await Match.findByPk(id);
    if (match) {
      await match.destroy();
      res.json({ message: "Match deleted successfully" });
    } else {
      res.status(404).json({ message: "Match not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllMatches,
  getMatchById,
  createMatch,
  updateMatch,
  deleteMatch,
};
