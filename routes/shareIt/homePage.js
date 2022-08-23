const router = require('express').Router()
const db = require('quick.db')

router.get('/feed', (req, res) => {
  res.sendFile("/home/runner/hypedscom/html/Feed.html")
  db.add("Clicks_FeedHomepage", 1)
})

module.exports = router;