const User = require("../models/User");
const { signUpErrors, signInErrors } = require("../utils/error.utils");
const jwt = require("jsonwebtoken");
const modelEmail = require("../mail/modelEmail");
const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.signIn = async (req, res) => {
  const { email, pwd } = req.body;
  try {
    const user = await User.findUser(email, pwd);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ user });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(400).send(err);
  }
};

module.exports.signUp = async (req, res) => {
  console.log(req.body);
  const { name, email, pwd, sexe, firstname, quartier } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      pwd,
      sexe,
      quartier,
      firstname,
    });
    await modelEmail({ account: true, name, email })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(400).send({ err });
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
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

module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
