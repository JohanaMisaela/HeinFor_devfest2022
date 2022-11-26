const app = require("express")();
require("dotenv").config({ path: "./src/config/.env" });
require("./src/config/db");
const userRouter = require("./src/routes/user.routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const {
  checkUser,
  requireAuth,
} = require("./src/middleware/auth.middleware.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

app.use("/api/user", userRouter);

app.listen(process.env.PORT, () =>
  console.log(`Listening on -> http://localhost:${process.env.PORT}`)
);
