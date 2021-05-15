const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");

const app = express();

// config keys
const db = require("./config/keys").MongoURI;

// Mongoose connetcion
mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .catch((err) => console.log(err))
  .then(() => console.log("MongoDB connected"));
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.static("public"));

app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(
  express.urlencoded({
    extended: false,
  })
);
// routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

// listen server
app.listen(PORT, console.log(`Server listening at ${PORT}`));
