const express = require("express");
require("./db");
const UsersRouter = require("./userRoute");
const Login = require("./login");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.use(UsersRouter);
app.use(Login);

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
