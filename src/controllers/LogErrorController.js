const LogError = require("../models");

const getAllLogErrors = async (req, res) => {
  try {
    const logErrors = await LogError.findAll();
    res.json(logErrors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getLogErrorById = async (req, res) => {
  const { id } = req.params;
  try {
    const logError = await LogError.findByPk(id);
    if (logError) {
      res.json(logError);
    } else {
      res.status(404).json({ message: "LogError not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createLogError = async (req, res) => {
  const { error_message, error_type } = req.body;
  try {
    const logError = await LogError.create({ error_message, error_type });
    res.status(201).json(logError);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateLogError = async (req, res) => {
  const { id } = req.params;
  const { error_message, error_type } = req.body;
  try {
    const logError = await LogError.findByPk(id);
    if (logError) {
      logError.error_message = error_message;
      logError.error_type = error_type;
      await logError.save();
      res.json(logError);
    } else {
      res.status(404).json({ message: "LogError not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteLogError = async (req, res) => {
  const { id } = req.params;
  try {
    const logError = await LogError.findByPk(id);
    if (logError) {
      await logError.destroy();
      res.json({ message: "LogError deleted successfully" });
    } else {
      res.status(404).json({ message: "LogError not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllLogErrors,
  getLogErrorById,
  createLogError,
  updateLogError,
  deleteLogError,
};
