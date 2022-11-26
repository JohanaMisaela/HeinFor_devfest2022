const {
  getAllBadges,
  createBadge,
} = require("../controllers/badge.controller");

const router = require("express").Router();

router.get("/", getAllBadges);
// router.get("/:id", getOneplainte);
router.post("/", createBadge);

// router.patch("/vote/:id", vote);
// router.patch("/unvote/:id", unvote);

module.exports = router;
