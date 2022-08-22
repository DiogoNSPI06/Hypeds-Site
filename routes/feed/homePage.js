const router = require('express').Router()
const db = require('quick.db')

router.get('/home', (req, res) => {
  
  db.add("Clicks_FeedHomepage", 1)
})

module.exports = router;