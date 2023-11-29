const Organizer = require("../models");

const getAllOrganizers = async (req, res) => {
  try {
    const organizers = await Organizer.findAll();
    res.json(organizers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getOrganizerById = async (req, res) => {
  const { id } = req.params;
  try {
    const organizer = await Organizer.findByPk(id);
    if (organizer) {
      res.json(organizer);
    } else {
      res.status(404).json({ message: "Organizer not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createOrganizer = async (req, res) => {
  const { organizer_name, contact_info } = req.body;
  try {
    const organizer = await Organizer.create({ organizer_name, contact_info });
    res.status(201).json(organizer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateOrganizer = async (req, res) => {
  const { id } = req.params;
  const { organizer_name, contact_info } = req.body;
  try {
    const organizer = await Organizer.findByPk(id);
    if (organizer) {
      organizer.organizer_name = organizer_name;
      organizer.contact_info = contact_info;
      await organizer.save();
      res.json(organizer);
    } else {
      res.status(404).json({ message: "Organizer not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteOrganizer = async (req, res) => {
  const { id } = req.params;
  try {
    const organizer = await Organizer.findByPk(id);
    if (organizer) {
      await organizer.destroy();
      res.json({ message: "Organizer deleted successfully" });
    } else {
      res.status(404).json({ message: "Organizer not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllOrganizers,
  getOrganizerById,
  createOrganizer,
  updateOrganizer,
  deleteOrganizer,
};
