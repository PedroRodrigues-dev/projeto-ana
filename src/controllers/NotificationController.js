const Notification = require("../models");

const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll();
    res.json(notifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getNotificationById = async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await Notification.findByPk(id);
    if (notification) {
      res.json(notification);
    } else {
      res.status(404).json({ message: "Notification not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createNotification = async (req, res) => {
  const { user_id, message, is_read } = req.body;
  try {
    const notification = await Notification.create({
      user_id,
      message,
      is_read,
    });
    res.status(201).json(notification);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateNotification = async (req, res) => {
  const { id } = req.params;
  const { user_id, message, is_read } = req.body;
  try {
    const notification = await Notification.findByPk(id);
    if (notification) {
      notification.user_id = user_id;
      notification.message = message;
      notification.is_read = is_read;
      await notification.save();
      res.json(notification);
    } else {
      res.status(404).json({ message: "Notification not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteNotification = async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await Notification.findByPk(id);
    if (notification) {
      await notification.destroy();
      res.json({ message: "Notification deleted successfully" });
    } else {
      res.status(404).json({ message: "Notification not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllNotifications,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification,
};
