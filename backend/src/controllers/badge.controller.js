const Badge = require("../models/Badge");

const getAllBadges = async (req, res) => {
  const badges = await Badge.find();
  res.status(200).json({ badges });
};

module.exports = {
  getAllBadges,
};
