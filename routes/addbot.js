const express = require("express");
const router = express.Router();

router.get("/addbot", (req, res) => {
  res.redirect("https://discord.com/api/oauth2/authorize?client_id=777850651669168138&permissions=8&redirect_uri=https%3A%2F%2Fwww.hypeds.com%2Fhypedbot&scope=bot%20applications.commands")
})

module.exports = router;
