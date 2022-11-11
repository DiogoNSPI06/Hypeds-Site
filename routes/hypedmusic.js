const router = require('express').Router()
const db = require('quick.db')

router.get('/hypedmusic', (req, res) => {
  //res.render('hypedmusic', { title: 'HYPED | HypedMusic' });
  res.redirect('https://beta.hypeds.com/hypedmusic')
  db.add("Clicks_HypedMusic", 1)
})

module.exports = router;