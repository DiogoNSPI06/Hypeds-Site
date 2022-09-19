const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  let redirectTo = req.query.redirectTo
  
  if(!req.query.redirectTo) redirectTo = "https://www.hypeds.com/dashboard"
    
  if(req.query.with === "discord") return res.redirect(`https://api.hypeds.com/v6/oauth2/loginWith/discord?redirectTo=${req.query.redirectTo}`)
  
  if(req.query.with === "replit") return res.redirect(`https://api.hypeds.com/v6/oauth2/loginWith/replit?redirectTo=${req.query.redirectTo}`)
  
  res.redirect(`https://api.hypeds.com/v6/oauth2/login?redirectTo=${redirectTo}`)
})

module.exports = router;