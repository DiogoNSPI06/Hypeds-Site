const router = require('express').Router()
const config = require('./config.json')
const request = require('https')
const db = require('quick.db')

router.get('/profile/:uid', (req, res) => {
  if(!req.params.uid) {
    return res.redirect("https://www.hypeds.com/profile")
  }
  res.send(`UserProfile of ${req.params.uid}`)
  db.add(`Clicks_UserID_${req.params.uid}`, 1)
})

router.get('/profile', (req, res) => {
  let random = '';
  let dict = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZ'
  for(var i = 0; i < 8; i++) {
    random = random + dict.charAt(Math.floor(Math.random() * dict.length));
  }
  
  request.get(`${config.API.path}/${config.API.version}/db/get/${config.API.token}/SessionUser_${req.cookies.SessionId}`, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      if(JSON.parse(data).value === req.query.username) {
        res.send(`Your Profile @${JSON.parse(data).value}`)
      } else {
        return res.redirect(`https://api.hypeds.com/v5/oauth2/login/${random}?redirectTo=https://www.hypeds.com/profile`)
      }
    })
  })
})

module.exports = router;