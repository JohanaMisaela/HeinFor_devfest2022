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

const deleteUser = async (req, res) => {
  if (!isValidObjectId(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await User.deleteOne({ _id: req.params.id }).exec();
    res
      .status(200)
      .json({ message: req.params.id + "Was deleted successfilly." });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const updateUser = async (req, res) => {
  if (!isValidObjectId(req.params.id)) {
    return res.status(400).send("ID inconnu : " + req.params.id);
  }
  const {
    name,
    email,
    pwd,
    bio,
    firstname,
    picture,
    quartier,
    status,
    age,
    idBadge,
  } = req.body;
  await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name,
        firstname,
        age,
        picture,
        quartier,
        idBadge,
        status,
        pwd,
        bio,
      },
    },
    {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    }
  )
    .then((data) => res.status(201).json({ message: "User updated !", data }))
    .catch((error) => res.status(400).json({ error }));
};

module.exports = {
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
};
