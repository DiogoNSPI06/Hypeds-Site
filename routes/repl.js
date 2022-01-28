const express = require("express");
const router = express.Router();

router.get("/repl", (req, res) => {
  res.redirect("https://replit.com/@DiogoNunes2")
})

module.exports = router;