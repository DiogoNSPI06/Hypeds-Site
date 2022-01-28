const express = require("express");
const router = express.Router();

router.get("/encurta", (req, res) => {
  res.redirect("https://encurtador.hypeds.com/redirect/XaeSpkKya.php")
})

module.exports = router;