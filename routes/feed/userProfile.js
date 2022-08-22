const router = require('express').Router()
const db = require('quick.db')

router.get('/user/:uid', (req, res) => {
  
  db.add(`Clicks_UserID_${req.params.uid}`, 1)
})

module.exports = router;