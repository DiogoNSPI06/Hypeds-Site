const express = require("express");
const router = express.Router();

router.get("/snft", (req, res) => {
  res.sendFile('/home/runner/hypedscom/html/snft.html')
})

module.exports = router;