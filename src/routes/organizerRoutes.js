const express = require("express");
const router = express.Router();
const {
  getAllOrganizers,
  getOrganizerById,
  createOrganizer,
  updateOrganizer,
  deleteOrganizer,
} = require("../controllers/OrganizerController");
const authenticateToken = require("../middlewares/auth");

router.get("/organizer", getAllOrganizers, () => {
  /* #swagger.tags = ['Organizer'] */
});
router.get("/organizer/:id", authenticateToken, getOrganizerById, () => {
  /* #swagger.tags = ['Organizer'] */
});
router.post("/organizer", authenticateToken, createOrganizer, () => {
  /* #swagger.tags = ['Organizer'] */
});
router.put("/organizer/:id", authenticateToken, updateOrganizer, () => {
  /* #swagger.tags = ['Organizer'] */
});
router.delete("/organizer/:id", authenticateToken, deleteOrganizer, () => {
  /* #swagger.tags = ['Organizer'] */
});

module.exports = router;
