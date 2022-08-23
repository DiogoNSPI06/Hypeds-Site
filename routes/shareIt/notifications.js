const router = require('express').Router()
const db = require('quick.db')

router.get('/notifications', (req, res) => {
  
  db.add("Clicks_Notifications", 1)
})

module.exports = router;