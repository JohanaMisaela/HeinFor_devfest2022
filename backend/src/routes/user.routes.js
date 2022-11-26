const router = require("express").Router();
const upload = require("multer")();

const {
  signUp,
  signIn,
  logout,
  deleteUser,
} = require("../controllers/auth.controller");
const { getAllUsers, getOneUser } = require("../controllers/user.controller");

router.get("/getUsers", getAllUsers);
router.get("/getUser/:id", getOneUser);
router.delete("/deleteUser/:id", deleteUser);
// router.put("/updateUser/:id", updateUser);
// router.post("/uploadImage", upload.single("file"), profile);

router.post("/signup", signUp);
router.post("/login", signIn);
router.get("/logout", logout);

module.exports = router;
