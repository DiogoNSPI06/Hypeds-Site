const router = require('express').Router()
const db = require('quick.db')

router.get('/hypedbot', (req, res) => {
  res.redirect('https://beta.hypeds.com/hypedbot')
  db.add("Clicks_HypedBot", 1)
})

module.exports = router;