const router = require('express').Router()
const db = require('quick.db')

router.get('/profile/:uid', (req, res) => {
  res.send(`UserProfile`)
  db.add(`Clicks_UserID_${req.params.uid}`, 1)
})

router.get('/profile', (req, res) => {
  
  if(!logged) {
    return res.redirect('https://api.hypeds.com/v5/oauth2/login?site=hypeds&redirect=profile')
  } else {
    res.send(`UserProfile`)
  }
})

module.exports = router;