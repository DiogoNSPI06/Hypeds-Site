const express = require("express");
const db = require('quick.db')
const router = express.Router();

router.get("/encurta", (req, res) => {
  res.redirect("https://encurtador.hypeds.com/redirect/XaeSpkKya.php")
  db.add("Clicks_Encurta", 1)
})

module.exports = router;