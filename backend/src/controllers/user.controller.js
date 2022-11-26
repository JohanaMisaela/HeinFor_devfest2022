const { isValidObjectId } = require("mongoose");
const User = require("../models/User");

const getAllUsers = async (req, res) => {
  const users = await User.find().select("-pwd");
  res.status(200).json({ users });
};

const getOneUser = async (req, res) => {
  if (!isValidObjectId(req.params.id)) {
    return res.status(400).send("ID inconnu : " + req.params.id);
  }
  User.findById(req.params.id, (error, docs) => {
    if (!error) {
      docs
        ? res.send(docs)
        : res.json({ message: "This user has been quicked" });
    } else console.log("ID Inconnu:" + error);
  }).select("-pwd");
};

module.exports = {
  getAllUsers,
  getOneUser,
};
