const router = require('express').Router()
const db = require('quick.db')

router.get('/hypedmusic', (req, res) => {
  //res.render('hypedmusic', { title: 'HYPED | HypedMusic' });
  res.sendFile('/home/runner/hypedscom/html/Hyped-Music.html')
  db.add("Clicks_HypedMusic", 1)
})

module.exports = router;