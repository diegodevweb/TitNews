const express = require("express");
const userRoute = require("./src/routes/user.route");
const app = express();

app.use("/users", userRoute);

app.listen(3000);