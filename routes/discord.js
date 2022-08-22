const express = require("express");
const db = require('quick.db')
const router = express.Router();

router.get("/discord", (req, res) => {
  res.render('discord', { title: 'HYPED | Link' });
  db.add("Clicks_Discord", 1)
})

module.exports = router;