const router = require('express').Router()
const db = require('quick.db')

router.get('/hypedbot', (req, res) => {
  res.sendFile('/home/runner/hypedscom/html/Hyped-Bot.html')
  db.add("Clicks_HypedBot", 1)
})

module.exports = router;