const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Authority = require("../models/Authority");

const router = express.Router();

router.post("/register", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  await Authority.create({
    username: req.body.username,
    password: hashed,
  });
  res.json({ message: "Authority created" });
});

router.post("/login", async (req, res) => {
  const user = await Authority.findOne({
    username: req.body.username,
  });

  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!match) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({}, process.env.JWT_SECRET);

  res.json({ token });
});

module.exports = router;