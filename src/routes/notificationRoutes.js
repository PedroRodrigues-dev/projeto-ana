const express = require("express");
const router = express.Router();
const {
  getAllNotifications,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification,
} = require("../controllers/NotificationController");
const { authenticateToken } = require("../middlewares/auth");

router.get("/notification", getAllNotifications, () => {
  /* #swagger.tags = ['Notification'] */
});
router.get("/notification/:id", authenticateToken, getNotificationById, () => {
  /* #swagger.tags = ['Notification'] */
});
router.post("/notification", authenticateToken, createNotification, () => {
  /* #swagger.tags = ['Notification'] */
});
router.put("/notification/:id", authenticateToken, updateNotification, () => {
  /* #swagger.tags = ['Notification'] */
});
router.delete(
  "/notification/:id",
  authenticateToken,
  deleteNotification,
  () => {
    /* #swagger.tags = ['Notification'] */
  }
);

module.exports = router;
