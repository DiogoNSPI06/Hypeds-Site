const express = require("express");
const router = express.Router();

router.get("/discord", (req, res) => {
  res.render('discord', { title: 'HYPED | Link' });
})

module.exports = router;