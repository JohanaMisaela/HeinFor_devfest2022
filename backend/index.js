const app = require("express")();
require("dotenv").config({ path: "./src/config/.env" });
require("./src/config/db");

app.listen(process.env.PORT, () =>
  console.log(`Listening on -> http://localhost:${process.env.PORT}`)
);
