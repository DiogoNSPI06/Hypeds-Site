const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.redirect(`https://api.hypeds.com/v6/oauth2/register`)
})

module.exports = router;