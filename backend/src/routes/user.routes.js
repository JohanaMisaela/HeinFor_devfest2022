const router = require("express").Router();
const upload = require("multer")();

const { signUp } = require("../controllers/auth.controller");
const { getAllUsers } = require("../controllers/user.controller");

router.get("/getUsers", getAllUsers);
// router.get("/getUser/:id", getOneUser);
// router.delete("/deleteUser/:id", deleteUser);
// router.put("/updateUser/:id", updateUser);
// router.post("/uploadImage", upload.single("file"), profile);

router.post("/signup", signUp);
// router.post("/signin", signIn);
// router.get("/logout", logout);

module.exports = router;
