const TournamentParticipant = require("../models");

const getAllTournamentParticipants = async (req, res) => {
  try {
    const tournamentParticipants = await TournamentParticipant.findAll();
    res.json(tournamentParticipants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getTournamentParticipantById = async (req, res) => {
  const { id } = req.params;
  try {
    const tournamentParticipant = await TournamentParticipant.findByPk(id);
    if (tournamentParticipant) {
      res.json(tournamentParticipant);
    } else {
      res.status(404).json({ message: "Tournament Participant not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createTournamentParticipant = async (req, res) => {
  const { tournament_id, team_id } = req.body;
  try {
    const tournamentParticipant = await TournamentParticipant.create({
      tournament_id,
      team_id,
    });
    res.status(201).json(tournamentParticipant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateTournamentParticipant = async (req, res) => {
  const { id } = req.params;
  const { tournament_id, team_id } = req.body;
  try {
    const tournamentParticipant = await TournamentParticipant.findByPk(id);
    if (tournamentParticipant) {
      tournamentParticipant.tournament_id = tournament_id;
      tournamentParticipant.team_id = team_id;
      await tournamentParticipant.save();
      res.json(tournamentParticipant);
    } else {
      res.status(404).json({ message: "Tournament Participant not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteTournamentParticipant = async (req, res) => {
  const { id } = req.params;
  try {
    const tournamentParticipant = await TournamentParticipant.findByPk(id);
    if (tournamentParticipant) {
      await tournamentParticipant.destroy();
      res.json({ message: "Tournament Participant deleted successfully" });
    } else {
      res.status(404).json({ message: "Tournament Participant not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllTournamentParticipants,
  getTournamentParticipantById,
  createTournamentParticipant,
  updateTournamentParticipant,
  deleteTournamentParticipant,
};
