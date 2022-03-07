const express = require("express");
const router = express.Router();

router.get("/youtube", (req, res) => {
  res.redirect("https://www.youtube.com/channel/UCnNIcB3R4T9RngF25iaN1uA")
})

module.exports = router;