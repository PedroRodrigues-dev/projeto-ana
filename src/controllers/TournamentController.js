const Tournament = require("../models");

const getAllTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.findAll();
    res.json(tournaments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getTournamentById = async (req, res) => {
  const { id } = req.params;
  try {
    const tournament = await Tournament.findByPk(id);
    if (tournament) {
      res.json(tournament);
    } else {
      res.status(404).json({ message: "Tournament not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createTournament = async (req, res) => {
  const {
    tournament_name,
    game_id,
    organizer_id,
    tournament_number,
    tournament_password,
    start_date,
    end_date,
    tournament_format,
  } = req.body;
  try {
    const tournament = await Tournament.create({
      tournament_name,
      game_id,
      organizer_id,
      tournament_number,
      tournament_password,
      start_date,
      end_date,
      tournament_format,
    });
    res.status(201).json(tournament);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateTournament = async (req, res) => {
  const { id } = req.params;
  const {
    tournament_name,
    game_id,
    organizer_id,
    tournament_number,
    tournament_password,
    start_date,
    end_date,
    tournament_format,
  } = req.body;
  try {
    const tournament = await Tournament.findByPk(id);
    if (tournament) {
      tournament.tournament_name = tournament_name;
      tournament.game_id = game_id;
      tournament.organizer_id = organizer_id;
      tournament.tournament_number = tournament_number;
      tournament.tournament_password = tournament_password;
      tournament.start_date = start_date;
      tournament.end_date = end_date;
      tournament.tournament_format = tournament_format;
      await tournament.save();
      res.json(tournament);
    } else {
      res.status(404).json({ message: "Tournament not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteTournament = async (req, res) => {
  const { id } = req.params;
  try {
    const tournament = await Tournament.findByPk(id);
    if (tournament) {
      await tournament.destroy();
      res.json({ message: "Tournament deleted successfully" });
    } else {
      res.status(404).json({ message: "Tournament not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllTournaments,
  getTournamentById,
  createTournament,
  updateTournament,
  deleteTournament,
};
