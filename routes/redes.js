const express = require("express");
const db = require('quick.db')
const router = express.Router();

router.get("/facebook", (req, res) => {
  db.add("Clicks_Facebook", 1)
  res.redirect("https://www.facebook.com/diogo.nunescosta.33/")
})

router.get("/twitter", (req, res) => {
  db.add("Clicks_Twitter", 1)
  res.redirect("https://twitter.com/diogonspi")
})

module.exports = router;