const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.redirect(`https://api.hypeds.com/v6/dashboard`)
})

module.exports = router;