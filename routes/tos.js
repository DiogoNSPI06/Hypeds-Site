const router = require('express').Router()
const db = require('quick.db')

router.get('/tos', (req, res) => {
  res.sendFile('/home/runner/hypedscom/html/TOS.html')
  db.add("Clicks_Tos", 1)
})

module.exports = router;