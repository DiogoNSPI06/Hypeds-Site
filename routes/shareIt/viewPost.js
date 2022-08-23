const router = require('express').Router()
const db = require('quick.db')

router.get('/post/:id', (req, res) => {
  
  db.add(`Clicks_PostID_${req.params.id}`, 1)
})

module.exports = router;