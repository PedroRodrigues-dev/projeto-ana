const MatchResult = require("../models");

const getAllMatchResults = async (req, res) => {
  try {
    const matchResults = await MatchResult.findAll();
    res.json(matchResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getMatchResultById = async (req, res) => {
  const { id } = req.params;
  try {
    const matchResult = await MatchResult.findByPk(id);
    if (matchResult) {
      res.json(matchResult);
    } else {
      res.status(404).json({ message: "Match Result not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createMatchResult = async (req, res) => {
  const { match_id, team1_id, team2_id, team1_score, team2_score } = req.body;
  try {
    const matchResult = await MatchResult.create({
      match_id,
      team1_id,
      team2_id,
      team1_score,
      team2_score,
    });
    res.status(201).json(matchResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateMatchResult = async (req, res) => {
  const { id } = req.params;
  const { match_id, team1_id, team2_id, team1_score, team2_score } = req.body;
  try {
    const matchResult = await MatchResult.findByPk(id);
    if (matchResult) {
      matchResult.match_id = match_id;
      matchResult.team1_id = team1_id;
      matchResult.team2_id = team2_id;
      matchResult.team1_score = team1_score;
      matchResult.team2_score = team2_score;
      await matchResult.save();
      res.json(matchResult);
    } else {
      res.status(404).json({ message: "Match Result not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteMatchResult = async (req, res) => {
  const { id } = req.params;
  try {
    const matchResult = await MatchResult.findByPk(id);
    if (matchResult) {
      await matchResult.destroy();
      res.json({ message: "Match Result deleted successfully" });
    } else {
      res.status(404).json({ message: "Match Result not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllMatchResults,
  getMatchResultById,
  createMatchResult,
  updateMatchResult,
  deleteMatchResult,
};
