const Team = require("../models");

const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.findAll();
    res.json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getTeamById = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await Team.findByPk(id);
    if (team) {
      res.json(team);
    } else {
      res.status(404).json({ message: "Team not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createTeam = async (req, res) => {
  const { team_name, captain_id, status } = req.body;
  try {
    const team = await Team.create({ team_name, captain_id, status });
    res.status(201).json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateTeam = async (req, res) => {
  const { id } = req.params;
  const { team_name, captain_id, status } = req.body;
  try {
    const team = await Team.findByPk(id);
    if (team) {
      team.team_name = team_name;
      team.captain_id = captain_id;
      team.status = status;
      await team.save();
      res.json(team);
    } else {
      res.status(404).json({ message: "Team not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteTeam = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await Team.findByPk(id);
    if (team) {
      await team.destroy();
      res.json({ message: "Team deleted successfully" });
    } else {
      res.status(404).json({ message: "Team not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
};
