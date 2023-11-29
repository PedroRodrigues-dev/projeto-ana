const MatchParticipant = require("../models");

const getAllMatchParticipants = async (req, res) => {
  try {
    const matchParticipants = await MatchParticipant.findAll();
    res.json(matchParticipants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getMatchParticipantById = async (req, res) => {
  const { id } = req.params;
  try {
    const matchParticipant = await MatchParticipant.findByPk(id);
    if (matchParticipant) {
      res.json(matchParticipant);
    } else {
      res.status(404).json({ message: "Match Participant not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createMatchParticipant = async (req, res) => {
  const { match_id, team_id } = req.body;
  try {
    const matchParticipant = await MatchParticipant.create({
      match_id,
      team_id,
    });
    res.status(201).json(matchParticipant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateMatchParticipant = async (req, res) => {
  const { id } = req.params;
  const { match_id, team_id } = req.body;
  try {
    const matchParticipant = await MatchParticipant.findByPk(id);
    if (matchParticipant) {
      matchParticipant.match_id = match_id;
      matchParticipant.team_id = team_id;
      await matchParticipant.save();
      res.json(matchParticipant);
    } else {
      res.status(404).json({ message: "Match Participant not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteMatchParticipant = async (req, res) => {
  const { id } = req.params;
  try {
    const matchParticipant = await MatchParticipant.findByPk(id);
    if (matchParticipant) {
      await matchParticipant.destroy();
      res.json({ message: "Match Participant deleted successfully" });
    } else {
      res.status(404).json({ message: "Match Participant not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllMatchParticipants,
  getMatchParticipantById,
  createMatchParticipant,
  updateMatchParticipant,
  deleteMatchParticipant,
};
