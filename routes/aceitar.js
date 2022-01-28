const express = require("express");
const router = express.Router();

router.get("/aceitar", (req, res) => {
  res.render('aceitar', { title: 'HYPED | Link' });
})

module.exports = router;