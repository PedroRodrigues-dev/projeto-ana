const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");
const { authenticateToken } = require("../middlewares/auth");

router.post("/register", createUser, () => {
  /* #swagger.tags = ['User'] */
});
router.post("/login", loginUser, () => {
  /* #swagger.tags = ['User'] */
});

router.get("/user", authenticateToken, getAllUsers, () => {
  /* #swagger.tags = ['User'] */
});
router.get("/user/:id", authenticateToken, getUserById, () => {
  /* #swagger.tags = ['User'] */
});
router.put("/user/:id", authenticateToken, updateUser, () => {
  /* #swagger.tags = ['User'] */
});
router.delete("/user/:id", authenticateToken, deleteUser, () => {
  /* #swagger.tags = ['User'] */
});

module.exports = router;
