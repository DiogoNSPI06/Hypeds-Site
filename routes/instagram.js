const express = require("express");
const router = express.Router();

router.get("/instagram", (req, res) => {
  res.redirect("https://www.instagram.com/diogo06221/")
})

module.exports = router;