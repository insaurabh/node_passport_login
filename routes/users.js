const express = require("express");
const router = express.Router();

// login page
router.get("/login", (req, res) => res.render("login"));

// register page
router.get("/register", (req, res) => res.render("register"));

// register post
router.post("/register", (req, res) => {
  let errors = [];
  const { name, email, password, password2 } = req.body;

  if (!name || !email || !password || !password2) {
    errors.push({
      msg: "Please fill all the fields",
    });
  }

  // password matched?

  if (password2 !== password) {
    errors.push({
      msg: "Password not matched",
    });
  }

  if (password.length < 6) {
    errors.push({
      msg: "Password should be atleast 6 charecters long",
    });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2,
    });
  } else {
    res.send("Form submited");
  }
});
module.exports = router;
