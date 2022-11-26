const Badge = require("../models/Badge");
const User = require("../models/User");

const getAllBadges = async (req, res) => {
  const badges = await Badge.find();
  res.status(200).json({ badges });
};

const createBadge = async (req, res) => {
  const { reboisement, recyclage, trieDechet, nettoyage } = req.body;
  const badge = Badge.create({
    reboisement,
    recyclage,
    trieDechet,
    nettoyage,
  });

  try {
    //     await badge.save();

    console.log(badge.path("_id"));

    //     await User.findByIdAndUpdate(
    //       req.body.idUser,
    //       {
    //         $addToSet: { idBadge: badge._id },
    //       },
    //       { new: true }
    //     )
    //       .then((user) => res.json({ user }))
    //       .catch((err) => res.status(400).send(err));
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  getAllBadges,
  createBadge,
};
