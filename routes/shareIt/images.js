const router = require('express').Router()
const db = require('quick.db')

router.get('/i/:id', (req, res) => {
  
  db.add(`Clicks_Image_${req.params.id}`, 1)
})

module.exports = router;